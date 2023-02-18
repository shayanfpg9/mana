import { useState } from "react";
import User from "./User";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchResult from "./SearchResult";

export default function Parent({ api }) {
  const search = useParams().team,
    [data, setData] = useState(null);

  axios({
    url: api,
    method: "get",
  }).then((res) => {
    if (search === undefined) {
      if (data === null) {
        setData(res.data.sort(sort).slice(0, 20));
        scroll(document.querySelectorAll(".user"));
      } else if (!equal(res.data, data)) {
        setData(res.data.sort(sort).slice(0, 20));
        res.data.forEach((obj, i) => {
          if (!equal(obj, data[i])) {
            document.querySelectorAll(".user")[i]?.scrollIntoView();
          }
        });
      }
    } else {
      res.data.sort(sort);

      let resIndex = 0;
      const resVal = res.data.find((val, i) => {
        const isResult =
          val.team.replace("-", " ").toLowerCase() ===
          search.replace("-", " ").toLowerCase();

        if (isResult) resIndex = i;

        return isResult;
      });

      setData({
        index: resIndex,
        all: res.data.length,
        ...resVal,
      });
    }
  });

  if (search === undefined) {
    const els = data?.map((val, i) => {
      return <User key={`user-${i + 1}`} {...val} index={i} />;
    });

    return <main className="parent">{els}</main>;
  } else if (data !== null) {
    return (
      <main className="parent">
        <SearchResult data={data} />
      </main>
    );
  }
}

function scroll(elements, stop = 10000) {
  window?.scroll(0, 0);

  let ComponentH = 0;
  document
    .querySelectorAll(".header--top , .header , .footer")
    .forEach((el) => {
      ComponentH += el.clientHeight;
    });

  const transform =
    ~~((window?.innerHeight - ComponentH) / (elements[1]?.clientHeight + 10)) -
    1; // index 1 because in the index 0 for the large width maybe we're don't have overflow

  let i = transform;

  window?.setTimeout(() => {
    const inter = window?.setInterval(() => {
      if (i + transform <= elements.length) {
        elements[i]?.scrollIntoView();
        i += transform;
      } else {
        window?.clearInterval(inter);
        scroll(elements);
      }
    }, 5000);
  }, stop);
}

function sort(a, b) {
  return b.payment - a.payment;
}

function equal(a, b) {
  a = JSON.stringify(a);
  b = JSON.stringify(b);

  return a === b;
}

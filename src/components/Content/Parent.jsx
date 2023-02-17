import { useState } from "react";
import User from "./User";
import axios from "axios";

export default function Parent({ api }) {
  const [data, setData] = useState(null),
    els = data?.map((val, i) => {
      return <User key={`user-${i + 1}`} {...val} index={i} />;
    });

  axios
    .get(api, {
      timeout: 3000,
    })
    .then((res) => {
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
    });

  return <main className="parent">{els}</main>;
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

import { useContext, useEffect, useState } from "react";
import User from "./User";
import { Link } from "react-router-dom";
import { DataContext, equal } from "../Mana";

let runScroll = () => {
  scroll(document.querySelectorAll(".user"));
  runScroll = undefined;
};

export default function Competition() {
  const [data, setData] = useState([]),
    CtxVal = useContext(DataContext);

  useEffect(() => {
    if (
      document.querySelectorAll(".user").length > 0 &&
      typeof runScroll === "function"
    ) {
      runScroll();
    }

    if (equal(data, []) && CtxVal) {
      setData(CtxVal.slice(0, 20));
    }
  }, [data, CtxVal]);

  const els = data?.map((val, i) => {
    return (
      <Link key={`user-${i + 1}`} to={`/team/${val.team.replace(" ", "-")}`}>
        <User {...val} index={i} />
      </Link>
    );
  });

  return <main className="parent">{els}</main>;
}

function scroll(elements, stop = 5000) {
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

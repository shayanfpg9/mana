import { useState } from "react";
import User from "./User";
import json from "../../db/users.json";

export default function Parent() {
  json.sort((a, b) => {
    return b.payment - a.payment;
  });

  const [data, setData] = useState(json),
    els = data?.map((val, i) => {
      return <User key={`user-${i + 1}`} {...val} index={i} />;
    });

  window?.addEventListener("load", () => {
    scroll(document.querySelectorAll(".user"));
  });

  return <main className="parent">{els}</main>;
}

function scroll(elements) {
  window?.scroll(0, 0);

  let ComponentH = 0;
  document
    .querySelectorAll(".header--top , .header , .footer")
    .forEach((el) => {
      ComponentH += el.clientHeight;
    });

  const transform =
    ~~((window?.innerHeight - ComponentH) / (elements[1].clientHeight + 10)) -
    1; // index 1 because in the index 0 for the large width maybe we're don't have overflow

  let i = transform;

  window?.setTimeout(() => {
    const inter = window?.setInterval(() => {
      if (i + transform <= elements.length) {
        elements[i].scrollIntoView();
        i += transform;
      } else {
        window?.clearInterval(inter);
        scroll(elements);
      }
    }, 5000);
  }, 10000);
}

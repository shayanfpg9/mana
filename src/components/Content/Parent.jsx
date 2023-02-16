import { useState } from "react";
import User from "./User";
import json from "../../db/users.json";

export default function Parent() {
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

  let i = 0;

  window?.setTimeout(() => {
    const inter = window?.setInterval(() => {
      if (i + 10 <= elements.length) {
        elements[i + 5].scrollIntoView();
        i++;
      } else {
        window?.clearInterval(inter);
        scroll(elements);
      }
    }, 1000);
  }, 10000);
}

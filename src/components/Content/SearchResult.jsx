import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Err404 from "../Error/404";
import { sort } from "./Competition";
import User from "./User";

export default function SearchResult({ api }) {
  const search = useParams().team,
    [data, setData] = useState(null);

  document.querySelector("html").style.overflow = "hidden";

  axios.get(api).then((res) => {
    res.data.sort(sort);

    let resIndex = 0;
    const resVal = res.data.find((val, i) => {
      const isResult =
        val.team.replace("-", " ").toLowerCase() ===
        search.replace("-", " ").toLowerCase();

      if (isResult) resIndex = i;

      return isResult;
    });

    if (resVal) {
      setData({
        index: resIndex,
        all: res.data.length,
        ...resVal,
      });
    } else {
      setData({
        error: 404,
      });
    }
  });

  if (data !== null) {
    if (data?.error) {
      return (
        <main className="parent">
          <Err404 />
        </main>
      );
    }

    return (
      <main className="parent">
        <User {...data} />
        <section className="search-result">
          <span>
            <span className="q">نام تیم:</span>
            {data.team}
          </span>
          <span>
            <span className="q">میزان درآمد:</span>
            {data.payment * 1000} تومان
          </span>
          <span>
            <span className="q">رتبه:</span>
            {data.index + 1} از {data.all} تیم
          </span>
        </section>
      </main>
    );
  } else {
    return "loading...";
  }
}

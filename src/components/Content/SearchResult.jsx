import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { sort } from "./Competition";
import User from "./User";

export default function SearchResult({ api }) {
  const search = useParams().team,
    [data, setData] = useState(null);

  document.querySelector("html").style.overflow = "hidden";

  axios
    .get(api)
    .then((res) => {
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
    });

  if (data !== null) {
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
  }else{
    return "loading..."
  }
}

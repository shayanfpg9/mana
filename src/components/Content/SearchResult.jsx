import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Err404 from "../Error/404";
import { DataContext } from "../Mana";
import User from "./User";

export default function SearchResult() {
  const search = useParams().team,
    [data, setData] = useState([]),
    CtxVal = useContext(DataContext);

  document.querySelector("html").style.overflow = "hidden";

  useEffect(() => {
    let resIndex = 0;
    const resVal = CtxVal.find((val, i) => {
      const isResult =
        val.team.replace("-", " ").toLowerCase() ===
        search.replace("-", " ").toLowerCase();

      if (isResult) resIndex = i;

      return isResult;
    });

    if (resVal) {
      setData({
        index: resIndex,
        all: data.length,
        ...resVal,
      });
    } else {
      setData({
        error: 404,
      });
    }
  }, [CtxVal, search, data.length]);

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
}

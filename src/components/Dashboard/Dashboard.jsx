import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sort } from "../Content/Competition";

export default function Dashboard({ api }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(api).then((res) => {
      res.data.sort(sort);

      setInfo({
        length: res.data.length,
        min: res.data[res.data.length - 1].payment * 1000,
        max: res.data[0].payment * 1000,
        FirstTeamName:
          res.data[0].team[0].toUpperCase() + res.data[0].team.substr(1),
      });
    });
  });

  return (
    <main className="parent">
      <section className="search-result search-result--top-vis">
        <span>
          <span className="q">تعداد کل تیم ها:</span>
          {info?.length}
        </span>

        <span>
          <span className="q">درآمد تیم اول:</span>
          {info?.min} تومان
        </span>

        <span>
          <span className="q">درآمد تیم آخر:</span>
          {info?.max} تومان
        </span>

        <span>
          <span className="q">نام تیم اول:</span> "
          <Link className="link--special" to={`/team/${info.FirstTeamName}`}>
            {info?.FirstTeamName}
          </Link>
          "
        </span>
      </section>
    </main>
  );
}

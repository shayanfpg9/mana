import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext , equal } from "../Mana";

export default function Dashboard() {
  const [info, setInfo] = useState({});
  const CtxVal = useContext(DataContext);

  useEffect(() => {
    if (!equal(CtxVal, []) && Array.isArray(CtxVal)) {
      setInfo({
        length: CtxVal.length,
        min: CtxVal.at(CtxVal.length - 1)?.payment * 1000,
        max: CtxVal.at(0).payment * 1000,
        FirstTeamName:
          CtxVal.at(0).team.at(0).toUpperCase() + CtxVal.at(0).team.substr(1),
      });
    }
  }, [CtxVal]);

  return (
    <main className="parent">
      <section className="search-result search-result--top-vis">
        <span>
          <span className="q">تعداد کل تیم ها:</span>
          {info?.length}
        </span>

        <span>
          <span className="q">درآمد تیم اول:</span>
          {info?.max} تومان
        </span>

        <span>
          <span className="q">درآمد تیم آخر:</span>
          {info?.min} تومان
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

import User from "./User";

export default function SearchResult({ data }) {
  document.querySelector("html").style.overflow = "hidden";

  return (
    <>
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
    </>
  );
}

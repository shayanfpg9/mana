import { useEffect } from "react";
import { $ } from "../../js/functions";

export default function Search(props) {
  useEffect(() => {
    if (props.open) {
      $(".searchbox").addEventListener("keyup", ({ code }) => {
        if (code == "Escape") props.close();
      });
      $(".searchbox__input").focus();
    }
  });

  return (
    <>
      <div onClick={props.close} className={props.open ? "blur" : "hide"}>
        <button
          onClick={props.close}
          type="button"
          className="bi bi-x searchbox__close"
        ></button>
      </div>

      <form
        action={props.path}
        method="get"
        role="searchbox"
        className={"searchbox " + (!props.open ? "hide" : "")}
      >
        <input
          role="search"
          className="searchbox__input"
          type="text"
          name="team"
          placeholder="نام تیم را وارد کنید"
        />
        <button className="searchbox__submit" type="submit">
          <i className="bi bi-search-heart-fill"></i>
          پیدا کن
        </button>
      </form>
    </>
  );
}

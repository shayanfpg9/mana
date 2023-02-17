import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(props) {
  const searchbox = useRef(),
    input = useRef(),
    navigate = useNavigate();

  useEffect(() => {
    if (props.open) {
      searchbox.current.addEventListener("keyup", ({ code }) => {
        if (code === "Escape") props.close();
      });

      input.current.focus();
    }

    searchbox.current.onsubmit = (ev) => {
      ev.preventDefault();
      props.close();
      navigate(`/team/${input.current.value.replace(" ", "-")}`);
    };
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
        ref={searchbox}
        method="get"
        role="searchbox"
        className={"searchbox " + (!props.open ? "hide" : "")}
      >
        <input
          ref={input}
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

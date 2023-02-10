import { createRef, useEffect } from "react";

export default function Search(props) {
  const searchbox = createRef(),
    input = createRef();

  useEffect(() => {
    if (props.open) {
      searchbox.current.addEventListener("keyup", ({ code }) => {
        if (code === "Escape") props.close();
      });

      input.current.focus();
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
        ref={searchbox}
        action={props.path}
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

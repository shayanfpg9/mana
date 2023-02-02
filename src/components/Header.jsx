import { useState } from "react";
import { GetBreak } from "../js/functions.js";
import Menu from "./Menu.jsx";

export default function Header() {
  const [width, setWidth] = useState(window?.innerWidth);
  window?.addEventListener("resize", () => {
    setWidth(window?.innerWidth);
  });

  const [status, setStatus] = useState(false);

  const MenuBtnClick = ({ target }) => {
    if (status) setStatus(false);
    else setStatus(true);
  };

  return (
    <>
      <span className="header--top"></span>
      <header className="header">
        <img
          src=""
          alt="لیگ علمی مانا"
          className="header__logo fibo-1--ci bg-main"
        />
        <h1 className="header__title">لیگ علمی مانا</h1>

        {width >= GetBreak("xl") ? (
          <Menu></Menu>
        ) : (
          <button
            onClick={MenuBtnClick}
            className="header__menu-icon bi bi-list"
          ></button>
        )}
      </header>

      {width < GetBreak("xl") ? (
        <Menu status={status} function={MenuBtnClick} />
      ) : (
        ""
      )}
    </>
  );
}

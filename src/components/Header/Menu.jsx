export default function Menu(props) {
  const left = props.status ? 0 : "calc(-1 * var(--menu-width))";

  return (
    <menu style={{ left }} className={`header__menu`}>
      <button
        onClick={props.function}
        className="header__menu-icon bi bi-x-lg"
      ></button>

      <li className="header__menu-item fibo-1--sq">
        <a href="#">
          <i className="bi bi-house-fill"></i>
          خانه
        </a>
      </li>
      <li className="header__menu-item fibo-1--sq">
        <a href="#">
          <i className="bi bi-speedometer"></i>
          داشبورد
        </a>
      </li>
      <li className="header__menu-item fibo-2--sq">
        <button onClick={props.SearchBoxClick}>
          <i className="bi bi-binoculars-fill"></i>
          جست و جو
        </button>
      </li>
    </menu>
  );
}

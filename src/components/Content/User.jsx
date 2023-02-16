import useTraUser from "../Hook/useTraUser";

export default function User(props) {
  const info = useTraUser(props),
    precent = (100 * info.payment) / info.aim;

  return (
    <div
      className={`user ${info.level !== "else" ? `user--${info.level}` : ""}`}
    >
      <span className="user__team">{info.team}</span>
      <div className={`user__image ${info.level !== "else" ? "icon" : ""}`}>
        <img src={info.image} alt={info.team} />
      </div>
      <div className="user__payment">
        <span
          style={{ width: `${precent}%` }}
          className="user__payment--prog"
        ></span>
        <span className="user__payment--amount">{info.payment} تومان</span>
      </div>
    </div>
  );
}

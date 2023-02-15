import useTraUser from "../Hook/useTraUser";

export default function User(props) {
  const info = useTraUser(props);

  return (
    <div
      className={`user ${info.level !== "else" ? `user--${info.level}` : ""}`}
    >
      <span className="user__team">{info.team}</span>
      <div className="user__image">
        <img src={info.image} alt={info.team} />
      </div>
      <div className="user__payment">
        <span
          style={{ width: `${(100 * info.payment) / info.aim}%` }}
          className="user__payment--prog"
        ></span>
      </div>
    </div>
  );
}

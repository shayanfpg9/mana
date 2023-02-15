import useTraUser from "../Hook/useTraUser";

export default function User(props) {
  const info = useTraUser(props);

  return (
    <div
      className={`user ${info.level !== "else" ? `user--${info.level}` : ""}`}
    >
      <span className="user__team">{info.team}</span>
      <img className="user__image" src={info.image} alt={info.team} />
      <div style={{ width: info.aim }} className="user__payment">
        <span
          style={{ width: `${(info.aim / info.payment) * 100}%` }}
          className="user__payment--prog"
        ></span>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function useTraUser(information) {
  const [user, changeUser] = useState({});
  let level = "";

  switch (information.index + 1) {
    case 1:
      level = "first";
      break;

    case 2:
      level = "second";
      break;

    case 3:
      level = "third";
      break;

    default:
      level = "else";
      break;
  }

  changeUser({
    index: information.index,
    team: information.team,
    level,
    image: information.image,
    payment: information.payment * 1000,
  });

  return [user , changeUser];
}

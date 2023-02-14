export default function useTraUser(information) {
  const user = {};

  switch (information) {
    case 1:
      user.level = "first";
      break;

    case 2:
      user.level = "second";
      break;

    case 3:
      user.level = "third";
      break;

    default:
      user.level = "else";
      break;
  }

  user.team = information.team;
  user.image = information.image;
  user.payment = information.payment * 1000;
}

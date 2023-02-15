export default function useTraUser(information) {
  let level = "",
    aim = 0;

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

  if (information.payment >= 1000) {
    aim = 10000;
  } else if (information.payment >= 100 && information.payment < 1000) {
    aim = 5000;
  } else if (information.payment >= 10 && information.payment < 100) {
    aim = 800;
  } else {
    aim = 200;
  }

  return {
    index: information.index,
    team: information.team,
    level,
    image: information.image,
    payment: information.payment * 1000,
    aim: aim * 1000,
  };
}

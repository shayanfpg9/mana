const GetBreak = (point) => {
  const breakpoints = { xs: 0, sm: 480, md: 720, lg: 960, xl: 1200, xxl: 1400 };
  return breakpoints[point];
};

const $ = (
  qr,
  filter = (result) => {
    return result;
  }
) => {
  const select = document.querySelectorAll(qr),
    result =
      select.length > 0 ? (select.length == 1 ? select[0] : select) : undefined;

  if (typeof filter === "function") return filter(result);
};

export { GetBreak, $ };

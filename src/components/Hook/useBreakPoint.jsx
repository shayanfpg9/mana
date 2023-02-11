import { useState } from "react";
import useSize from "./useSize";

export default function useBreakPoint(init = "now") {
  const [breakpoint, setBreackpoint] = useState(""),
    [size, setSize] = useState(init);

  if (typeof init == "string") {
    if (init == "now") {
      setSize(window?.innerWidth);
      window?.addEventListener("resize", () => {
        setSize(window?.innerWidth);
      });
    } else {
      setBreackpoint(init);
    }
  }

  if (size >= useSize("xxl")) return "xxl";
  else if (size >= useSize("xl") && size < useSize("xxl"))
    setBreackpoint("xl");
  else if (size >= useSize("md") && size < useSize("xl"))
    setBreackpoint("md");
  else if (size >= useSize("sm") && size < useSize("md"))
    setBreackpoint("sm");
  else setBreackpoint("xs");

  return breakpoint;
}

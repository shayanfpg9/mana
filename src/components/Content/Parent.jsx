import { useEffect, useState } from "react";
import User from "./User";
import json from "../../db/users.json";

export default function Parent() {
  const [data, setData] = useState(json),
    els = data?.map((val, i) => {
      return <User key={`user-${i + 1}`} {...val} index={i} />;
    });

  return <main className="parent">{els}</main>;
}

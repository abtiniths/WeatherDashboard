import React from "react";
import { formatToLocalTime } from "../api/weatherApi";

export default function TimeAndLocation({
  weather: { dt, timezone, name, country },
}) {
  return (
    <div>
      <div className="local-time"></div>
      <div className="country">
        <p>{`${name}, ${country}`} </p>
        <p>{formatToLocalTime(dt, timezone)}</p>
      </div>
    </div>
  );
}

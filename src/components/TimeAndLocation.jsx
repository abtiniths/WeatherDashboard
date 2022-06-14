import React from "react";
import { formatToLocalTime } from "../api/weatherApi";
import "../App.css";
import Clock from "./Clock"


export default function TimeAndLocation({
  weather: { dt, timezone, name, country },
}) {
  return (
    <div>
    
      <div className="Details"></div>
        <p className="CityAndCountry">{`${name}, ${country}`} </p>
        <p className="TimeZone">{formatToLocalTime(dt, timezone)}   <Clock /></p>
    </div>
  );
}

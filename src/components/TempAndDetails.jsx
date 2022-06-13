import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "../api/weatherApi";

//<p>sunrise :{formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
//<p>sunset :{formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
export default function TempAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="mainCard">
      <p>{details}</p>
      <img src={iconUrlFromCode(icon)} alt="icon" />
      <p>temp :{temp.toFixed()}°C</p>
      <p>temp min:{temp_min.toFixed()}°C</p>
      <p>temp max:{temp_max.toFixed()}°C</p>
      <p>sunrise {sunrise}</p>
      <p>sunset :{sunset}</p>
      <p>windspeed :{speed.toFixed()}</p>
      <p>Humidity :{humidity}</p>
      <p> feelslike :{feels_like.toFixed()}°C</p>
    </div>
  );
}

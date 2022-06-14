import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "../api/weatherApi";
import "../App.css"

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
    <div className="MainCard">
      <div className="DetailsContainer">
      <p className="MainCardDetails">{details}</p>
      <img className="MainCardIcon" src={iconUrlFromCode(icon)} alt="icon" />
      </div>
      <div className="TempContainer">
      <p className="MainCardTemp">Temp :{temp.toFixed()}°C</p>
      <p className="MainCardTempMin">Temp min:{temp_min.toFixed()}°C</p>
      <p className="MainCardTempMax">Temp max:{temp_max.toFixed()}°C</p>
      </div>
      <div className="SunContainer">
      <p className="MainCardSunrise">Sunrise {formatToLocalTime(sunrise,timezone, "HH:mm")}</p>

      <p className="MainCardSunset">Sunset {formatToLocalTime(sunset,timezone,"HH:mm")}</p>
      <p className="MainCardWindSpeed">Windspeed :{speed.toFixed()}</p>
      <p className="MainCardHumidity">Humidity :{humidity}</p>
      <p className="FeelsLike"> Feelslike :{feels_like.toFixed()}°C</p>
      </div>
    </div>
  );
}

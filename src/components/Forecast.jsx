import React from "react";
import { iconUrlFromCode } from "../api/weatherApi";
import "../styles/forecast.css";

export default function Forecast({ title, items }) {
  return (
    <div className="container">
      {items.map((item) => (
        <div>
          <li key={item.id} className="item-list">
            <p>{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt="icon" />
            <p>{item.temp.toFixed()}°C</p>
          </li>
        </div>
      ))}
    </div>
  );
}

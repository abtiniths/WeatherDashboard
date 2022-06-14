import React from "react";
import { iconUrlFromCode } from "../api/weatherApi";
import "../App.css";

export default function Forecast({ title, items }) {
  return (
    <div className="Container">
      <h1>{title}</h1>
      {items.map((item) => (
        <div>
          <li key={item.id} className="ItemList">
            <p className="ItemTitle">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt="icon" />
            <p className="ItemTemp">{item.temp.toFixed()}°C</p>
          </li>
        </div>
      ))}
    </div>
  );
}

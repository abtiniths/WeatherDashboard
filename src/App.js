import "./App.css";
import getFormattedWeatherData from "./api/weatherApi";
import { useEffect, useState } from "react";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";

function App() {
  // const [query, setQuery] = useState({ q: "stockholm" });
  //const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState("");
  const [mode, setMode] = useState("online");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getFormattedWeatherData({ q: "stockholm" }).then(
          (data) => {
            console.log(data);
            setWeather(data);
            localStorage.setItem("weather", JSON.stringify(data));
          }
        );
      } catch (error) {
        setMode("offline");
        let collection = localStorage.getItem("weather");
        setWeather(JSON.parse(collection));
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="App">
      {weather && (
        <div>
          <div className="ansikte">
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
          </div>
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="hourly forecast" items={weather.daily} />
        </div>
      )}
      <p>
        {mode === "offline" ? (
          <p>
            {" "}
            You are now in offline mode, for updated weather information, please
            connect to a network.{" "}
          </p>
        ) : null}
      </p>
    </div>
  );
}

export default App;

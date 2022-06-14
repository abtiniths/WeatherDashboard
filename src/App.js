import "./App.css";
import getFormattedWeatherData from "./api/weatherApi";
import { useEffect, useState } from "react";
import TimeAndLocation from "./components/TimeAndLocation";
import WeatherMainCard from "./components/WeatherMainCard";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState("");
  const [mode, setMode] = useState("online");
  /*
  const [timeInterval, setTimeInterval] = useState(0);

  setTimeout(() => {
    setTimeInterval(timeInterval + 1);
  }, 720000);
*/
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await getFormattedWeatherData().then(
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
      <div className="WeatherContainer">
      {weather && (
        <div>
          <div className="ansikte">
            <TimeAndLocation weather={weather} />
            <WeatherMainCard weather={weather} />
          </div>
          <Forecast title="Hourly forecast" items={weather.hourly} />
          <Forecast title="Daily forecast" items={weather.daily} />
        </div>
      )}
      </div>
      <div>
        {mode === "offline" ? (
          <p className="OfflineMessage">
            You are now in offline mode, for updated weather information, please
            connect to a network.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;

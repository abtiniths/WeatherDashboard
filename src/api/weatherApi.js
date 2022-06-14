import { DateTime } from "luxon";

// const API_KEY = "0a9a343c905d32db4e4363b66bcc1e52";
const API_KEY = "0a9a343c905d32db4e4363b66bcc1e52";
//const BASE_URL = `https://api.openweathermap.org/data/2.5`;



const getWeatherData = async (url) => {
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 8).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 8).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "HH:mm"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async () => {
  

  const formattedCurrentWeather = await getWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${API_KEY}`
  ).then(formatCurrentWeather);

  const formattedForecastWeather = await getWeatherData(`https://api.openweathermap.org/data/2.5/onecall?lat=59.3326&lon=18.0649&exclude=current%2Cminutely%2Calerts&units=metric&appid=${API_KEY}`
).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'HH:mm"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };

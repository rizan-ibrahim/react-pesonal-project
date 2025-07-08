import "../styles/WeatherCard.css";
import { useContext } from "react";
import { WeatherContext } from "../context/Weathercontext";
export const CurrentWeatherCard = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);
  if (loading) return <p>loading weather...</p>;
  if (error) return <p>Error:{error}</p>;
  if (!weatherData) return <p>no weather data available...</p>;

  const {
    name,
    main: { temp, humidity, pressure },
    weather,
    wind,
  } = weatherData;
  const iconCode = weather[0].icon;
  const description = weather[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-main">
        <img src={iconUrl} alt="weather icon" />

        <div className="temp">{Math.round(temp)}°C</div>
      </div>
      <p>{description}</p>
      <section className="weather-section">
        <p>Wind: {wind.speed} m/s</p>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure} hPa</p>
      </section>
    </div>
  );
};

import "../styles/header.css";
import "../styles/WeatherCard.css";
import { ForecastList } from "./ForecastList";

import { useContext } from "react";
import { WeatherContext } from "../context/Weathercontext";
export const WeatherDetailsCard = () => {
  const { city, weatherData, error } = useContext(WeatherContext);

  if (!weatherData || error) {
    return (
      <section>
        <p>❌ No valid data available</p>
        <p>Please search a valid city.</p>
      </section>
    );
  }

  const {
    weather,
    main: { temp },
  } = weatherData;
  const iconCode = weather[0].icon;
  const description = weather[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <header>
        <h1>Weather Details</h1>
      </header>
      <section className="weather-section">
        <p>city: {city}</p>
        <p>Temperature: {Math.round(temp)}°C</p>
        <p>Condition: {description}</p>
        <img src={iconUrl} alt={description} className="weather-icon" />
      </section>
      <ForecastList />
    </div>
  );
};

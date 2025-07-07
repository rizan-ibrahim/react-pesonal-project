import "../styles/WeatherCard.css";
import logo from "../assets/logo.png";
import { ForecastList } from "./ForecastList";

export const CurrentWeatherCard = () => {
  return (
    <div className="weather-card">
      <h1>amsterdam netherlands</h1>
      <div className="weather-main">
        <img src={logo} alt="weather icon" />
        <div className="temp">22°C</div>
      </div>
      <p>Sunny</p>
      <section className="weather-section">
        <p>Wind: 21 km/h</p>
        <p>Precip: 0 mm</p>
        <p>Pressure: 1013 mb</p>
      </section>
      <ForecastList />
    </div>
  );
};

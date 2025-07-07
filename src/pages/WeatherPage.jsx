import { Link } from "react-router-dom";
import "../styles/WeatherPage.css";
import { WeatherDetailsCard } from "../componenets/WeatherDetailsCard";

export const WeatherPage = () => {
  return (
    <div className="weather-page">
      <WeatherDetailsCard
        city="Amsterdam"
        temperature={32.9}
        condition="Clear sky"
        iconCode="01n"
      />
      <Link to="/">HomePage</Link>
    </div>
  );
};

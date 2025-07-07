import "../styles/header.css";
import "../styles/WeatherCard.css";

export const WeatherDetailsCard = ({ city, temp, condition, iconCode }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <div className="weather-card">
      <header>
        <h1>Weather Details</h1>
      </header>
      <section className="weather-section">
        <p>city: {city}</p>
        <p>Temperature: {temp}°C</p>
        <p>Condition: {condition}</p>
        <img src={iconUrl} alt={condition} className="weather-icon" />
      </section>
    </div>
  );
};

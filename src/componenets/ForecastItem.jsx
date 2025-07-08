import "../styles/ForecastItem.css";
export const ForecastItem = ({ day, temp, icon }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="forecast-item">
      <p>{day}</p>
      <img src={iconUrl} />
      <p>{temp}</p>
    </div>
  );
};

import "../styles/ForecastItem.css";
import logo from "../assets/logo.png";
export const ForecastItem = ({ day, temp }) => {
  return (
    <div className="forecast-item">
      <p>{day}</p>
      <img src={logo} />
      <p>{temp}</p>
    </div>
  );
};

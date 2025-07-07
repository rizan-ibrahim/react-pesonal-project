import { ForecastItem } from "./ForecastItem";
import "../styles/ForecastList.css";

export const ForecastList = () => {
  const ForecastItemData = [
    { day: "Sun", temp: 18 },
    { day: "Mon", temp: 20 },
    { day: "Tue", temp: 19 },
    { day: "Wed", temp: 21 },
    { day: "Thu", temp: 22 },
  ];
  return (
    <div className="forecast-list">
      {ForecastItemData.map((item, index) => (
        <ForecastItem key={index} day={item.day} temp={item.temp} />
      ))}
    </div>
  );
};

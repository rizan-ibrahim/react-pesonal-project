import { ForecastItem } from "./ForecastItem";
import "../styles/ForecastList.css";
import { useContext } from "react";
import { WeatherContext } from "../context/Weathercontext";

export const ForecastList = () => {
  const { forecastData, loading, error } = useContext(WeatherContext);

  if (loading) return <p>Loading forecast...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!forecastData) return <p>No forecast data available.</p>;

  const dailyForecasts = forecastData.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast-list">
      {dailyForecasts.map((item, index) => {
        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString("en-US", {
          weekday: "short",
        });
        const temp = Math.round(item.main.temp);
        const icon = item.weather[0].icon;

        return <ForecastItem key={index} day={day} temp={temp} icon={icon} />;
      })}
    </div>
  );
};

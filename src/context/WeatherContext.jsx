import { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();
const API_KEY = import.meta.env.VITE_API_KEY;

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("leeuwarden");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("cant find the city name");
      }
      const data = await response.json();
      setWeatherData(data);
      setCity(cityName);
      // forcast data.
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!forecastRes.ok) throw new Error("Forecast not found");
      const forecast = await forecastRes.json();
      setForecastData(forecast.list);
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // defualt city weather!
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        city,
        setCity,
        fetchWeather,
        loading,
        error,
        forecastData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

import "../styles/searchBar.css";
import { useContext, useState } from "react";
import { WeatherContext } from "../context/Weathercontext";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { fetchWeather } = useContext(WeatherContext);
  const [input, setInput] = useState("");
  const [localError, setLocalError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const success = await fetchWeather(input.trim());
      if (success) {
        setInput("");
        setLocalError("");
        navigate("/weather");
      } else {
        setLocalError("cant find this city name");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-section">
      <input
        type="text"
        placeholder="Enter your city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="weather-input"
      />
      <button className="search-bar button">search</button>
    </form>
  );
};

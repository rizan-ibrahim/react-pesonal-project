import { Link } from "react-router-dom";
import { Header } from "../componenets/header";
import { Search } from "../componenets/SearchBar";
import { CurrentWeatherCard } from "../componenets/CurrentWeatherCard";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-layout">
        <div className="left-panel">
          <Header />
          <Search />
          <Link to="/weather">WeatherPage</Link>
        </div>
        <div className="right-panel">
          <CurrentWeatherCard />
        </div>
      </div>
    </div>
  );
};

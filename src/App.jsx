import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { WeatherPage } from "./pages/WeatherPage";

function App() {
  return (
    <div>
      <nav></nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/weather" element={<WeatherPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

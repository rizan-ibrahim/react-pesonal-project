import "../styles/searchBar.css";

export const Search = () => {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Enter your city"
        className="weather-input"
      />
      <button className="search-bar button">search</button>
    </section>
  );
};

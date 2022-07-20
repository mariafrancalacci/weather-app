import searchIcon from "icons/search-button-icon.svg";

function SearchButton({ searchText, fetchWeather }) {
  return (
    <button
      onClick={() => fetchWeather(searchText)}
      className="bg-brand-300 hover:bg-neutral-700 rounded-r py-1.5"
    >
      <img src={searchIcon} />
    </button>
  );
}

export default SearchButton;

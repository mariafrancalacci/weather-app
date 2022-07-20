import { useState } from "react";
import "./App.css";
import MainWeatherInfo from "./components/MainWeatherInfo";
import SearchBar from "./components/SearchBar";
import SearchButton from "./components/SearchButton";

function App() {
  const [searchText, setSearchText] = useState("");
  const [weather, setWeather] = useState(null);

  const key = "0c3c89c7a7a702f4b6a93e4d58fd57f8";

  const fetchWeather = async (text) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${key}`
    );
    const data = await response.json();
    console.log("weather vai ser: ", data);

    setWeather(data);
  };

  return (
    <div>
      <div className="flex flex-row justify-center mt-5">
        <SearchBar setSearchText={setSearchText} />
        <SearchButton searchText={searchText} fetchWeather={fetchWeather} />
      </div>
      <div className="flex justify-center">
        <MainWeatherInfo weather={weather} />
        {/* {weather && <p>{Math.round(weather.main.temp - 273.15)}°C</p>} */}
      </div>
    </div>
  );
}

export default App;

//o que é uma query
//entender melhor useEffect

// armazenadar dado do input state
// armazenadar dados da api

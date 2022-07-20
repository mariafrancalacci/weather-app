import clearIcon from "icons/clear-icon.svg";
import cloudsIcon from "icons/clouds-icon.svg";
import drizzleIcon from "icons/drizzle-icon.svg";
import rainIcon from "icons/rain-icon.svg";
import snowIcon from "icons/thunderstorm-icon.svg";

function kelvinToCelcius(temperature) {
  return Math.round(temperature - 273.15);
}

function MainWeatherInfo({ weather }) {
  if (!weather) return null;

  let today = new Date().toLocaleDateString("en-UK");

  //   remover ifs

  const mainMap = {
    Clear: clearIcon,
    Clouds: cloudsIcon,
    Drizzle: drizzleIcon,
    Rain: rainIcon,
    Snow: snowIcon,
  };

  const main = weather.weather[0].main;

  const icon = mainMap[main];

  console.log(main);

  return (
    <div className="mt-20">
      <div className="bg-brand-300 max-w-[35%] rounded-t py-2 text-lg text-background-300 font-lato font-medium">
        {weather && <span className="pl-10">{weather.name.toUpperCase()}</span>}
      </div>
      <div className="bg-background-300 rounded-b rounded-r flex flex-row w-[32rem]">
        <div className="px-4 py-6 flex flex-col items-center">
          <span className=" text-md font-lato text-brand-300">
            {weather && weather.weather[0].main}
          </span>
          <img src={icon} />
          <span className=" text-md font-lato text-brand-300">
            {weather && kelvinToCelcius(weather.main.temp)}°C
          </span>
        </div>
        <div className="flex flex-row gap-x-5 text-sm py-8 px-8 font-lato text-brand-300">
          <div className="flex flex-col gap-y-4">
            <span>Date: {today}</span>
            <span>
              Temperature: {weather && kelvinToCelcius(weather.main.temp)}
            </span>
            <span>
              Min Temperature:
              {weather && kelvinToCelcius(weather.main.temp_min)}°C
            </span>
            <span>
              Max Temperature:
              {weather && kelvinToCelcius(weather.main.temp_max)}°C
            </span>
          </div>
          <div className="flex flex-col gap-y-4">
            <span>Feels like:{weather && weather.main.feels_like}</span>
            <span>Pressure:{weather && weather.main.pressure}</span>
            <span>Humidity:{weather && weather.main.humidity}</span>
            <span>Wind speed:{weather && weather.wind.speed}</span>
          </div>
        </div>
      </div>
    </div>
    // px-52  py-16
  );
}

export default MainWeatherInfo;

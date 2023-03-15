import "../css/weatherContainerBig.css";

export const WeatherContainerBig = ({ city, data }) => {
  const dateTime = new Date();
  const dateOptions = { month: "long", day: "numeric"}
  const timeOptions = { hour: "2-digit", minute: "2-digit"}

  if (city !== null && data !== null) {
    return (
      <div className="weather-container-big box">
        <div className="grid-item-1">
          <div className="city-name text">{city}</div>
          <div className="text secondary">{data.weather[0].description}</div>
        </div>
        <div className="grid-item-2">
          <div><img className="icon-big" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon"/></div>
          <div className="temp">{Math.round(data.main.temp)} °C</div>
        </div>
        <div className="grid-item-3">
          <div className="date text">{dateTime.toLocaleDateString("en-GB", dateOptions)}</div>
          <div className="text secondary">{dateTime.toLocaleTimeString("en-GB", timeOptions)}</div>
        </div>
        <div className="grid-item-4 text secondary">
          <div>Wind: {data.wind.speed} m/s</div>
          <div>Humidity: {data.main.humidity} %</div>
          { data.rain && data.rain["3h"]
            ? <div>Precipitation: {data.rain["3h"]} mm</div>
            : null
          }
        </div>
        
      </div>
    );
  }
};
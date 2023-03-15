import "../css/weatherContainerSmall.css";

export const WeatherContainerSmall = ({ data }) => {
  const timeOptions = { hour: "2-digit", minute: "2-digit"}

  if (data !== null && data.length !== 0) {
    return(
      <div className="box container-small">
        <div className="secondary">{new Date(data.dt_txt).toLocaleTimeString("en-GB", timeOptions)}</div>
        <img  className="icon-small" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon"/>
        <div className="temp-small secondary">{Math.round(data.main.temp)} °C</div>
        <div className="info-box secondary">
          <div>{data.wind.speed} m/s</div>
          <div>{data.main.humidity} %</div>
          { data.rain && data.rain["3h"]
            ? <div>Precipitation: {data.rain["3h"]} mm</div>
            : null
          }
        </div>
      </div>
    );   
  }
};
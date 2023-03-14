
export const WeatherContainerBig = ({ city, data }) => {
  console.log(data);
  const dateTime = new Date();
  const dateOptions = { month: "long", day: "numeric"}
  const timeOptions = { hour: "2-digit", minute: "2-digit"}

  return (
    <div className="weather-container-big element">
      <div>
        <p>{city}</p>
        <p>{data.weather[0].description}</p>
      </div>
      <div>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon"/>
        <h1>{Math.round(data.main.temp)} °C</h1>
      </div>
      <div>
        <h2>{dateTime.toLocaleDateString("en-GB", dateOptions)}</h2>
        <p>{dateTime.toLocaleTimeString("en-GB", timeOptions)}</p>
      </div>
      <div>
        <p>Wind: {data.wind.speed} m/s</p>
        <p>Humidity: {data.main.humidity} %</p>
        { data.main.rain
          ? <p>Precipitation: {data.main.rain} mm</p>
          : null  
        }
      </div>
      
    </div>
  );
};
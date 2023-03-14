import { useEffect, useState } from "react";
import { WeatherContainerBig } from "./WeatherContainerBig";
import { coords, currentUrl, forecastUrl } from "../constants";
import axios from "axios";

export const CityWeather = ({ city }) => {
  const key = "";
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('error state', error);
  console.log('weather data', weatherData);

  const fetchCurrentData = async () => {
    try {
      const { data } = await axios.get(currentUrl(coords[city].lat, coords[city].lon, key));
      setLoading(false);
      setError(null);
      setWeatherData(data);
    } catch (error) {
      console.log('error:', error);
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  useEffect(() => {    
    if (city) {
      fetchCurrentData();
    }  
  }, [city]);

  return(
    <div>
      { loading
        ? <div>loading...</div>
        : error
        ? <div>{error}</div>
        : weatherData
        ? <WeatherContainerBig city={city} data={weatherData}/>
        : null
      }
    </div>
  );
};
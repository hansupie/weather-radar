import { useEffect, useState } from "react";
import { WeatherContainerBig } from "./WeatherContainerBig";
import { API_KEY, coords, currentUrl, forecastUrl } from "../constants";
import axios from "axios";
import { WeatherContainerSmall } from "./WeatherContainerSmall";
import "../css/cityWeather.css";
import { LoadingSpinner } from "./LoadingSpinner";

export const CityWeather = ({ city }) => {
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [currentError, setCurrentError] = useState(null);
  const [forecastError, setForecastError] = useState(null);
  const [currentLoading, setCurrentLoading] = useState(true);
  const [forecastLoading, setForecastLoading] = useState(true);

  const fetchCurrentData = async () => {
    try {
      const { data } = await axios.get(currentUrl(coords[city].lat, coords[city].lon, API_KEY));
      setCurrentLoading(false);
      setCurrentError(null);
      setCurrentData(data);
    } catch (error) {
      setCurrentLoading(false);
      setCurrentError(error.response.data.message);
    }
  };

  const fetchForecastData = async () => {
    try {
      const { data } = await axios.get(forecastUrl(coords[city].lat, coords[city].lon, API_KEY));
      setForecastLoading(false);
      setForecastError(null);
      setForecastData(data.list);
    } catch (error) {
      setForecastLoading(false);
      setForecastError(error.response.data.message);
    }
  }

  useEffect(() => {    
    if (city) {
      fetchCurrentData();
      fetchForecastData();
    }  
  }, [city]);

  return(
    <div className="city-container">
      { currentLoading
        ? <LoadingSpinner />
        : currentError
        ? <div className="error box">{currentError}</div>
        : currentData
        ? <WeatherContainerBig city={city} data={currentData}/>
        : null
      }
      { forecastLoading
        ? <LoadingSpinner />
        : forecastError
        ? <div className="error box">{forecastError}</div>
        : forecastData.length !== 0
        ? <div className="forecast-container">
            {forecastData.map((item) => 
              <WeatherContainerSmall 
                key={item.dt_txt}
                data={item}
              />
            )}
          </div>
        : null
      }      
    </div>
  );
};
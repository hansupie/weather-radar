import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WeatherContainerBig } from '../components/WeatherContainerBig';

const mock_api_data = {
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}

describe('CityWeather', () => {
  it('renders weathercontainerbig with mock data', () => {
    let data = JSON.stringify(mock_api_data)
    data = JSON.parse(data)
    render(<WeatherContainerBig city="Zocca" data={data}/>);
    const windSpeed = screen.getByTestId("wind")
    expect(windSpeed.textContent).toBe("Wind: 0.62 m/s")
  });
});
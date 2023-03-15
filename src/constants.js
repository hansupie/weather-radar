export const API_KEY = "";

export const coords = {
  "tampere": { lat: "61.4991", lon: "23.7871"},
  "jyväskylä": { lat: "62.2415", lon: "25.7209"},
  "kuopio": { lat: "62.8924", lon: "27.677"},
  "espoo": { lat: "60.25", lon: "24.6667"},
};

export const currentUrl = (lat, lon, key) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
export const forecastUrl = (lat, lon, key) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${key}&units=metric`;
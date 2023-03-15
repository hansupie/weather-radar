import { useState } from "react";
import { CityWeather } from "./components/CityWeather";

const App = () => {
  const cityOptions = [
    {
      label: "Valitse kaupunki",
      value: ""
    },
    {
      label: "Kaikki kaupungit",
      value: "all"
    },
    {
      label: "Espoo",
      value: "espoo"
    },
    {
      label: "Jyväskylä",
      value: "jyväskylä"
    },
    {
      label: "Kuopio",
      value: "kuopio"
    },
    {
      label: "Tampere",
      value: "tampere"
    },
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);


  const handleSelectCity = (e) => {
    const selection = e.target.value;
    setSelectedCity(selection);

    if (selection === "") {
      setCities([]);
    }
    else if (selection === "all") {
      setCities(["espoo", "jyväskylä", "kuopio", "tampere"]);
    }
    else {
      setCities([selection]);
    }
  };

  return (
    <div className="app">
      <div className="header">Säätutka</div>
      <div className="content">
        <select 
          className="select box"
          value={selectedCity} 
          onChange={handleSelectCity}
        >
          {cityOptions.map((option, index) => (
            <option value={option.value} key={index}>{option.label}</option>
          ))}
        </select>
        {cities.map((city, index) => (
          <CityWeather
            key={index}
            city={city}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
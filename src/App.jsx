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

  const [selected, setSelected] = useState("");
  const [cities, setCities] = useState([]);
  console.log('cities', cities);

  const handleSelect = (e) => {
    const selection = e.target.value;
    setSelected(selection);

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
          className="select element"
          value={selected} 
          onChange={handleSelect}
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
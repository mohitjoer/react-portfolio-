import React, { useState } from 'react'; // Added useState import
import Searchbox from './component/Searchbox';
import InfoBox from './component/infobox';

import './App.css';

function App() {
  const [wetherdata, setWeatherinfo] = useState({
    city: "",
    country: "",
    temp: "",
    feelslike: "",
    tempmin: "",
    tempmax: "",
    humidity: "",
    wether: ""
  });

  let updateWeather = (newInfo) => {
    setWeatherinfo(newInfo);
  };

  return (
    <>
      <Searchbox UpdateInfo={updateWeather} /> {/* Fixed prop name */}
      <InfoBox info={wetherdata} />
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://api.weatherstack.com/current";
const params = {
  access_key: process.env.REACT_APP_WEATHER_API_KEY,
  query: "Helsinki",
};
const Weather = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(API, { params }).then((response) => setWeather(response.data));
  }, []);
  return (
    <div>
      <p>Weather info here: </p>
      {/* <p>{weather.current.temperature} degrees</p> */}
      {/* <p>
        Currently in {weather.location.name} is {weather.current.temperature}{" "}
        degrees. It feels like {weather.current.feelslike}
      </p> */}
    </div>
  );
};

export default Weather;

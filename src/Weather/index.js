// import './index.css'
// const Weather = () => {
//     return(
//         <div>
//             <div className="searchplace">
//                 <div>
//             <h2>Ryan</h2>
//             </div>
//             <div>
//             <input type="text" placeholder="Search place"/>
//             </div>
//             <button>search</button>
//             </div>
//         <img src='./images/blue-sky.jpeg' alt='sky image'/>
//         </div>
//     )
// }
// export default Weather;
import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '33cec71c7b0949a29a7143521240906';
  const API_URL ='http://api.weatherapi.com';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  useEffect(() => {
    // Fetch weather data when the component mounts
    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <div>
        <input type="text" value={city} onChange={handleInputChange} placeholder="Enter a city" />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <div>Error: {error.message}</div>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



export default function Searchbox() {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6ed30c8707727b5cd9c13653d360dadb";

    let wetherInfo = async (city) => {
        
        const response = await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        let result={
            temp: data.main.temp,
            tempmin: data.main.temp_min,
            tempmax: data.main.temp_max,
            feelslike: data.main.feels_like,
            humidity: data.main.humidity,
            wether: data.weather[0].description,
        }
    };
    const [city, setCity] = useState("");

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        wetherInfo(city);
        setCity("");
    }

    return (

        <div className="searchbox">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="standard" value={city} onChange={handleChange} required  />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}
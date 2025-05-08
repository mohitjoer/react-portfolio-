import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Searchbox({ UpdateInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6ed30c8707727b5cd9c13653d360dadb";

    const [city, setCity] = useState("");

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            console.log(data);
            const newInfo = {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                tempmin: data.main.temp_min,
                tempmax: data.main.temp_max,
                feelslike: data.main.feels_like,
                humidity: data.main.humidity,
                wether: data.weather[0].description,
            };
            UpdateInfo(newInfo);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
        setCity("");
    };

    return (
        <div className="searchbox">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City Name"
                    variant="standard"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
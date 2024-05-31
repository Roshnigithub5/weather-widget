import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css";
import { useState } from 'react';
import InfoBox from './InfoBox';
export default function SearchBox({updateInfo}) {
    
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a60bf87d79408057432cd355cb0e2cdf";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let resJSON = await response.json();
            let result = {
                city : city,
                temp : resJSON.main.temp,
                tempMin : resJSON.main.temp_min,
                tempMax : resJSON.main.temp_max,
                humidity : resJSON.main.humidity,
                feelsLike : resJSON.main.feels_like,
                weather : resJSON.weather[0].description,
            }
            return result;
        } catch(err) {
            throw err;
        }
            
    }

    let handleChange = (event) => {
        setCity(event.target.value)
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setErr(true);
        }
        
    }
    return (
        <>
        <div className='searchbox'>


        <form onSubmit={handleSubmit}>
        <TextField required id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} style={{zIndex : "1", opacity : "1", marginBottom : "5px"}}/>
            <br /> 
        <Button variant="contained" startIcon={<SearchIcon />} style={{backgroundColor : "white", color : "black", margin : "auto", textAlign : "center"}} onClick={handleSubmit}>
            Search
        </Button>
        </form>
        {err && <p style={{color : "red"}}>No such place exist!</p>}
        </div>
        </>
    );
}


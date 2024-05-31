import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1542159919831-40fb0656b45a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMHdlYXRoZXJ8ZW58MHwwfDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHwwfDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1618557703025-7ec58c83581a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHwwfDB8fHww";
    return (
        <>
        <div className="InfoBox">
            <hr color="#000" />
            <h3>Weather Info</h3>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : (info.temp > 15) ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 ? <WaterDropOutlinedIcon/> : (info.temp > 15) ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Min Temp = {info.tempMin}&deg;C</div>
          <div>Max Temp = {info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
        </>
    );
}
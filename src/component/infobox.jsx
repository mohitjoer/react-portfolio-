import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    let imgurl = "https://images.unsplash.com/photo-1705085708510-9c6bdcd95ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2V0aGVyfGVufDB8fDB8fHww";
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imgurl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city},{info.country}
            
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            
            <p>Temperature: {info.temp}°C</p>
            <p>Feels Like: {info.feelslike}°C</p>
            <p>Min Temperature: {info.tempmin}°C</p>
            <p>Max Temperature: {info.tempmax}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Weather: {info.wether}</p>
          </Typography>
        </CardContent>
      </Card>
    );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function HotelCard({ name, address, city, state, country_code }) {
  return (
    <Card sx={{ width: '100%', height: '100%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          adress: {address}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          west: {state}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          city: {city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          country code: {country_code}
        </Typography>
      </CardContent>
    </Card>
  );
}

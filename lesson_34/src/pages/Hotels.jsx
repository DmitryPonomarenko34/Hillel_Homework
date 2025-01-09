import { Grid2, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import HotelCard from '../components/HotelCard';

const HotelsPage = () => {
  const { hotels } = useSelector((state) => state.booking);
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid2 container spacing={2}>
        {hotels.map((hotel) => (
          <Grid2 key={hotel.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <HotelCard
              address={hotel.address}
              city={hotel.city}
              country_code={hotel.country_code}
              name={hotel.name}
              state={hotel.state}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default HotelsPage;

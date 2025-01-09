import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid2, Button, Box, Typography } from '@mui/material';
import SelectLabels from '../components/SelectLabels';
import BasicDateRangePicker from '../components/BasicDateRangePicker';
import { submitFormAndGetHotelsAsync } from '../store/saga/asyncActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const { destinations, loading } = useSelector((state) => state.booking);

  const getHotels = (data) => {
    console.log('🚀 ~ getHotels ~ data:', data);
    dispatch(submitFormAndGetHotelsAsync());
  };

  return (
    <Box>
      <Box marginBottom={1}>
        <Form
          onSubmit={getHotels}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid2 container spacing={2} alignItems="center">
                <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                  <SelectLabels
                    name="destination"
                    isLoading={loading}
                    label={'Destination'}
                    items={destinations}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
                  <BasicDateRangePicker name={'dateRange'} />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 3, md: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Adults"
                    name="adults"
                    type="number"
                    slotProps={{ htmlInput: { min: 0 } }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 3, md: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Childrens"
                    name="childrens"
                    type="number"
                    slotProps={{ htmlInput: { min: 0 } }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 1 }}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ height: '56px', backgroundColor: 'orange' }}>
                    Submit
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          )}
        />
      </Box>

      <Typography variant="h1" fontSize={'40px'} fontWeight={700} marginBottom={1}>
        Travel With <span style={{ color: 'orange' }}>Booking</span>
      </Typography>
      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora laudantium
        exercitationem sint, omnis rem tempore repellat expedita aspernatur at nostrum corrupti hic?
        Aperiam vero eius quod nam, veniam repudiandae. Mollitia labore consequuntur accusamus, non
        quo repellendus facere nulla esse maiores velit, aut repellat iste placeat libero
        necessitatibus nesciunt unde sint quia delectus. Sint reprehenderit minus ipsa dolorem
        adipisci totam.
      </Typography>
    </Box>
  );
};

export default HomePage;

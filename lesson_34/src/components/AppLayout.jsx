import { useEffect } from 'react';
import { getDestinitionAsync } from '../store/saga/asyncActions';
import { useDispatch } from 'react-redux';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DrawerAppBar from './DrawerAppBar';

const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDestinitionAsync());
  }, []);

  return (
    <Box>
      <Box sx={{ marginBottom: '20px' }}>
        <DrawerAppBar />
      </Box>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Box>
  );
};

export default AppLayout;

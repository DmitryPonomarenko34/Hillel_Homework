import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DrawerAppBar from './DrawerAppBar';

const AppLayout = () => {
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

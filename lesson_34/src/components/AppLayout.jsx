import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DrawerAppBar from './DrawerAppBar';

const AppLayout = () => {
  return (
    <Box>
      <DrawerAppBar />
      <Outlet />
    </Box>
  );
};

export default AppLayout;

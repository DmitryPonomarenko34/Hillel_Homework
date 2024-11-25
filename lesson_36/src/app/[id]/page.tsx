import {Stack, TextField, Button, Typography} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function TodoChange({ params }: { params: { id: string } }) {
  
  return (
      <form>
        <Stack direction={'row'} spacing={3}>
          <TextField id="outlined-basic" label="New name" variant="outlined" />
          <Button variant="contained">Змінити</Button>
        </Stack>
        <Typography>
          Todo Id: {params.id}
        </Typography>
      </form>
  ) 
}
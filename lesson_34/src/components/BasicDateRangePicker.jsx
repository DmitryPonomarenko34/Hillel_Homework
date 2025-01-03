import dayjs from 'dayjs';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const minDate = dayjs().startOf('day');
const maxDate = dayjs().add(1, 'year').endOf('year');

const BasicDateRangePicker = ({ name }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']} sx={{ translate: '0px -4px' }}>
        <DateRangePicker
          format="DD-MM-YY"
          sx={{ '.MuiMultiInputDateRangeField-separator': { display: 'none' } }}
          name={name}
          localeText={{ start: 'Check-in', end: 'Check-out' }}
          minDate={minDate}
          maxDate={maxDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BasicDateRangePicker;

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Мінімальна дата — початок поточного місяця
const minDate = dayjs().startOf('day');

// Максимальна дата — кінець наступного року
const maxDate = dayjs().add(1, 'year').endOf('year');

const BasicDatePicker = ({ label, name }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker name={name} label={label} minDate={minDate} maxDate={maxDate} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BasicDatePicker;

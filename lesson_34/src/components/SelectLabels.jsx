import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectLabels = ({ label, items, name, isLoading }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 190, margin: 0 }} fullWidth>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          disabled={isLoading}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          name={name}
          label={label}
          onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {items?.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectLabels;

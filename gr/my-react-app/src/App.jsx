/* eslint-disable react/prop-types */
import { TextField, Button } from '@mui/material'
import { useState } from 'react';
import { Form, Field } from 'react-final-form'

const useFormField = () => {
  const [value, setValue] = useState();
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {value, onChange}
};

export default function App() {
  const onSubmit = (data) => console.log(data);

  return (
    <form>
      <input type="text" />
      <button>Submit</button>
    </form>
  )
}
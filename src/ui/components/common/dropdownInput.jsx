import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Gender = [
    {
      value: 'Gents',
      label: 'Mr',
    },
    {
      value: 'Ladies',
      label: 'Mrs',
    },
  ];
  
const Language = [
    {
      value: 'ENG',
      label: 'English',
    },
    {
      value: 'ESP',
      label: 'Spanish',
    },
    // Add more languages as needed
  ];
  

  export default function SelectTextFields({ title }) {
    const options = title === "Title" ? Gender : Language;
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '33ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label={title}
          defaultValue={options[0].value}
        //   helperText="Please select your currency"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
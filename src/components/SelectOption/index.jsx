import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectOption = ({ values, ...otherProps }) => {
  const [age, setAge] = React.useState('');
  const { label } = otherProps;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
        >
          {values && values.map((value) => {
            <MenuItem value={value.id}>{value.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectOption;
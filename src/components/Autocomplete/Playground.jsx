import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

const Playground = ({ values, ...otherProps }) => {
  const defaultProps = {
    options: values,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: values.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);

  return (
    <Stack spacing={1} sx={{ width: 300, margin: "10px" }}>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        renderInput={(params) => (
          <TextField 
            {...params} 
            {...otherProps}
            />
        )}
      />
    </Stack>
  );
}

export default Playground;
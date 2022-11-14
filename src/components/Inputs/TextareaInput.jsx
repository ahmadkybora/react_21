import React, { useState } from 'react';
import Textarea from '@mui/joy/Textarea';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';

const TextareaInput = ({ ...otherProps }) => {
  const { label, placeholder, minRows, maxRows, } = otherProps;
  const [text, setText] = useState('');
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Textarea
        placeholder={placeholder}
        value={text}
        onChange={(event) => setText(event.target.value)}
        minRows={minRows}
        maxRows={maxRows}
        sx={{ minWidth: 300 }}
      />
    </FormControl>
  );
}

export default TextareaInput;

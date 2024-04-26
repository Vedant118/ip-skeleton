import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Buttongroup({button_one,button_two,button_three,sx}) {
    const buttons = [
      <Button key="one" sx={sx}>{button_one}</Button>,
      <Button key="two" sx={sx}>{button_two}</Button>,
      <Button key="three" sx={sx}>{button_three}</Button>,
    ];
  return (
    <Box
      sx={{
       marginTop:'10px'
      }}
    >
      <ButtonGroup variant='outlined' size="secondary" aria-label="Small button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
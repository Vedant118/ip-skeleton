import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Buttongroup({ button_one, button_two, button_three, sx }) {
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <Box sx={{ marginTop: '10px' }}>
      <ButtonGroup variant="outlined" size="small" aria-label="Small button group">
        <Button
        variant={selectedButton === 1 ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick(1)}
          sx={{
            backgroundColor: selectedButton === 1 ? '#0F625D' : undefined,
            color: selectedButton === 1 ? '#ffffff' : 'black',
            ...sx 
          }}
        >
          {button_one}
        </Button>
        <Button
        variant={selectedButton === 2 ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick(2)}
          sx={{
            backgroundColor: selectedButton === 2 ? '#0F625D' : undefined,
            color: selectedButton === 2 ? '#ffffff' : 'black',
            ...sx
          }}
        >
          {button_two}
        </Button>
        <Button
        variant={selectedButton === 3 ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick(3)}
          sx={{
            backgroundColor: selectedButton === 3 ? '#0F625D' : undefined,
            color: selectedButton === 3 ? '#ffffff' : 'black',
            ...sx
          }}
        >
          {button_three}
        </Button>
      </ButtonGroup>
    </Box>
  );
}

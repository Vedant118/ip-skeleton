import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons({firstIcon,secontIcon,thirdIcon}) {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      size='small'
    >
      <ToggleButton value="left" aria-label="left aligned">
        {firstIcon}
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        {secontIcon}
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        {thirdIcon}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
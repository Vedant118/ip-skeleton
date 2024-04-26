import { Box, Typography } from '@mui/material';
import React from 'react'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
           {children}
          </Box>
        )}
      </Box>
    );
  }
  
export default CustomTabPanel
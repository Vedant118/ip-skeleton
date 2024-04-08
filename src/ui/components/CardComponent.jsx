import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import PlusIcon from '../../assets/PlusIcon';
import ArrowIcon from '../../assets/ArrowIcon';


const MyCard = ({ title, content, bottomSectionColor }) => {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 131, height: 215, margin: '20px' }} component={Paper}>
      <CardContent sx={{ bgcolor: "#EAFDFC", position: 'relative', display: 'flex' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
          <PlusIcon />
        </Box>
        <Typography variant="body1" color="text.secondary">
          {content}
        </Typography>
      </CardContent>

      <Box
        sx={{
          bgcolor: bottomSectionColor,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: "#FFFF",
          backgroundColor: '#00A89F',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '20px',
          height: '50px',
          position: 'absolute',
          bottom: '0px',
          width: '100%'
        }}
      >
        Start Now
        <ArrowIcon />
      </Box>
    </Card>
  );
};

export default MyCard;


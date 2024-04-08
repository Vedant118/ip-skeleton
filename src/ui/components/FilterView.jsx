import React from 'react';
import { Typography, ButtonGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ListViewTrue from '../../assets/ListViewTrue.svg';
import CalendarViewFalse from '../../assets/CalendarViewFalse.svg';
import CardViewFalse from '../../assets/CardViewFalse.svg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  typography: {
    color: '#000000',
    float: 'left',
    textTransform: 'capitalize'
  },
  buttonGroup: {
    float: 'right',
    padding: 5,
    border: '2px solid #D9D9D9',
    borderRadius: 4
  },
  iconButton: {
    background: 'none',
    border: 'none',
    padding: 0,
    margin: '0 5px',
    cursor: 'pointer'
  },
  ListViewIcon: {
    width: 24,
    height: 12,
  },
  calendarViewIcon: {
    width: 18,
    height: 20,
  },
  cardViewIcon: {
    width: 18,
    height: 20,
  },

});

const FilterView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.typography} style={{ fontWeight: 600 }}>
        Completed tasks
      </Typography>
      <ButtonGroup className={classes.buttonGroup}>
        <button className={classes.iconButton} style={{ paddingRight: '5px', borderRight: '2px solid #D9D9D9' }}>
          <img src={ListViewTrue} alt="List View" className={classes.ListViewIcon} />
        </button>
        <button className={classes.iconButton} style={{ paddingRight: '5px', borderRight: '2px solid #D9D9D9' }}>
          <img src={CalendarViewFalse} alt="Calendar View" className={classes.calendarViewIcon} />
        </button>
        <button className={classes.iconButton}>
          <img src={CardViewFalse} alt="Card View" className={classes.cardViewIcon} />
        </button>
      </ButtonGroup>
    </div>
  );
};

export default FilterView;

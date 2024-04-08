// src/Table.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#00A89F',
      // light: '#D3ECEA',
      // dark: '#D3ECEA',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles({
  table: {
    minWidth: '60vw'
  },
  tableHeader:{
    backgroundColor: '#D3ECEA',
  },
  tableBody:{
    backgroundColor: '#ebebeb',
    borderBottom: '1px solid #D9D9D9',
    //padding: '10px 35px'
  }
});

const data = [
  { id:1, type: 'Migrating to IP Solutions Portal', desc: 'Migrating your IP data to new portal', comp_date: '12th July 2024', action: 'verify' },
  { id:2, type: 'Renewal Payment', desc: 'Payment for Patent#12347', comp_date: '12th December 2024', action: 'view' },
];

const SimpleTable = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHeader}>
          <TableRow >
            <TableCell style={{fontFamily: 'Noto Sans', fontWeight:'900', borderRight: '1px solid #fff'}}>Type</TableCell>
            <TableCell style={{fontFamily: 'Noto Sans', fontWeight:'900', borderRight: '1px solid #fff'}}>Description</TableCell>
            <TableCell style={{fontFamily: 'Noto Sans', fontWeight:'900', borderRight: '1px solid #fff'}}>Completion Date</TableCell>
            <TableCell style={{fontFamily: 'Noto Sans', fontWeight:'900'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {data.map((row) => (
            <TableRow key={row.id} >
              <TableCell style={{padding: '10px 35px'}}>{row.type}</TableCell>
              <TableCell style={{padding: '10px 35px'}}>{row.desc}</TableCell>
              <TableCell style={{padding: '10px 35px'}}>{row.comp_date}</TableCell>
              <TableCell style={{padding: '10px 35px'}}>
              <Button variant="contained" color="ochre" style={{width: '100%', fontSize: '12px',fontWeight: '900'}} disabled={row.action === 'verify' ? true : false }>{row.action}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
};

export default SimpleTable;

import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData("Migrations to IP Solutions", "Migrating your IP data to the new portal", "12th July 2024", 24),
  createData("Renewal Payment", "payment for Patent #12345", "12th Decenber 2024", 24),
];

function CompletedTask() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  function Toggle() {
    return (
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 2,
        height:'55vh'
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom:'30px'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "black",
          }}
        >
          Completed Tasks
        </Typography>
        <Toggle />
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{width:'100%'}}  size="small" aria-label="a dense table">
            <TableHead
              sx={{
                backgroundColor: "rgb(216,235,234)",
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  TYPE
                </TableCell>
                <TableCell
                 
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  DESCRIPTION
                </TableCell>
                <TableCell
                
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  COMPLETION DATE
                </TableCell>
                <TableCell
                 
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell >{row.calories}</TableCell>
                  <TableCell >{row.fat}</TableCell>
                  <TableCell >{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default CompletedTask;

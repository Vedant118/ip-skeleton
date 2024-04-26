import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";

function createData(number, title, date, cost) {
  return { number, title, date, cost };
}

const rows = [
  createData("#13579AB", "IP Title goes here", "24 Oct 2024", "$400.0"),
  createData("#24680CD", "This is also a title bu..", "25 Oct 2024", "$700.0"),
];

const TableCellStyled = styled(TableCell)`
  font-size: 14px;
  font-weight: bold;
  background-color: #d3ecea;
  padding: 7px;
`;

const TableStyled = styled(TableCell)`
  padding: 7px;
`;

const backgroundColor = (index) => (index % 2 === 0 ? "#FFFFFF" : "#EAFDFC");

function Modal({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle style={{ fontWeight: "bold", fontSize: "28px" }}>
          Skip Renewal Confirmation
          <hr style={{ border: "1px solid #ccc", margin: "10px 0" }} />
        </DialogTitle>
        <DialogContent>
          <Box style={{ display: "flex", gap: "5px" }}>
            <DialogContentText
              style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
            >
              Renewal Selected: <span style={{ fontWeight: "normal" }}>02</span>
            </DialogContentText>
          </Box>
          <Box bgcolor="#0F625D" p={1} style={{ marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <DialogContentText style={{ color: "#FFFFFF", fontSize: "14px" }}>
                Renewal Details
              </DialogContentText>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#D5E7E6",
                    width: 32,
                    height: 32,
                    fontSize: "14px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                    color: "#000000",
                  }}
                >
                  02
                </Avatar>
                <KeyboardArrowDownIcon
                  style={{ fontSize: "30px", color: "#FFFFFF" }}
                />
              </div>
            </div>
          </Box>
          <AccessibleTable />
          <DialogContentText
            style={{
              color: "black",
              fontSize: "20px",
              marginTop: "20px",
              width: "480px",
            }}
          >
            Please confirm that by providing a "Close" instruction to RWS, that{" "}
            <span style={{ fontWeight: "bold" }}>
              RWS will close your cases and will not make any renewal payments
              or provide any future reminders.
            </span>{" "}
            Do you wish to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              marginTop: "30px",
              height: "50px",
              width: "150px",
              backgroundColor: "#FFFFFF",
              color: "#00A89F",
              marginRight: "30px",
              marginBottom: "10px",
              border: "2px solid #00A89F",
            }}
          >
            CANCEL
          </Button>
          <Button
            onClick={handleClose}
            style={{
              marginTop: "30px",
              height: "50px",
              width: "150px",
              backgroundColor: "#00A89F",
              color: "#FFFFFF",
              marginRight: "30px",
              marginBottom: "10px",
            }}
          >
            CONFIRM
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCellStyled>IP Number</TableCellStyled>
            <TableCellStyled>IP Title</TableCellStyled>
            <TableCellStyled>Due Date</TableCellStyled>
            <TableCellStyled>Cost</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.number}
              style={{ backgroundColor: backgroundColor(index) }}
            >
              <TableStyled component="th" scope="row">
                {row.number}
              </TableStyled>
              <TableStyled>{row.title}</TableStyled>
              <TableStyled>{row.date}</TableStyled>
              <TableStyled>{row.cost}</TableStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Modal;

import {
  ReorderSharp,
  SaveAltRounded,
  TuneOutlined,
} from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import Buttongroup from "../../common/ButtonGroup";
import RadioTable from "../../common/Table/RadioTable";
import SplitButton from "../../common/SplitButton";
import PaginationRounded from "../../common/Pagination";
import Modal from "../../common/Modal";

function Instruction() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          startIcon={<TuneOutlined />}
          size="small"
          sx={{ borderColor: "#0F625D", color: "#0F625D" }}
        >
          Filter Options
        </Button>
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            size="small"
            sx={{ borderColor: "#0F625D" }}
            onClick={handleClickOpen}
          >
            <SaveAltRounded sx={{ color: "#0F625D" }} />
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#00A89F" }}
          >
            ADD NEW IP
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Buttongroup
        
          sx={{
            borderColor: "#0F625D",
            // color:'#000000',
            paddingBlock:'8px',
            paddingInline:'10px',
          }}
          button_one={"Renewals Past Due Date"}
          button_two={"Urgent Due Renewals"}
          button_three={"Upcoming Renewals"}
        />
        <Box
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "4px",
            padding: "2px",
            borderWidth: "1px",
            borderColor: "#D9D9D9",
            borderStyle: "solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReorderSharp />
        </Box>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <RadioTable />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "6rem",
        }}
      >
        <SplitButton title="RENEW (X)" />
        <PaginationRounded />
      </Box>
      <Modal handleClose={handleClose} open={open} />
    </Box>
  );
}

export default Instruction;
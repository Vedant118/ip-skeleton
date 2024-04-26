import { Box, Tab, Tabs, ToggleButton, Typography } from "@mui/material";
import React from "react";
import SplitButton from "../common/SplitButton";
import CustomTabPanel from "../profileSetting/CustomTabPanel";
import ToggleButtons from "../common/ToggleButton";
import {
  FormatListBulletedRounded,
  Grid3x3Rounded,
  GridViewRounded,
  HelpOutlineOutlined,
  InsertInvitationRounded,
} from "@mui/icons-material";
import Instruction from "./Renewal_Instruction/Instruction";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Renewals() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "32px",
          }}
        >
          Patent Renewals
        </Typography>
        <SplitButton
        title={<HelpOutlineOutlined />}
        />
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              borderBottom: "1px solid #e8e8e8",
            }}
          >
            <Tab
              label="Renewals Instruction"
              {...a11yProps(0)}
              sx={{
                textTransform: "capitalize",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
            <Tab
              label="Renewal History"
              {...a11yProps(1)}
              sx={{
                textTransform: "capitalize",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
            <Tab
              label="Renewal Receipts"
              {...a11yProps(2)}
              sx={{
                textTransform: "capitalize",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
            <Tab
              label="Renewals Documents"
              {...a11yProps(3)}
              sx={{
                textTransform: "capitalize",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
            <Tab
              label="Discrepancies"
              {...a11yProps(4)}
              sx={{
                textTransform: "capitalize",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />
          </Tabs>
        </Box>
        <ToggleButtons
          firstIcon={<FormatListBulletedRounded />}
          secontIcon={<InsertInvitationRounded />}
          thirdIcon={<GridViewRounded />}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <CustomTabPanel value={value} index={0}>
          <Instruction />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Hello
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default Renewals;

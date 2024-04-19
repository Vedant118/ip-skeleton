import React from "react";
import TopBar from "../topBar/TopBar";
import Sidebar from "../sideBar/Sidebar";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import CustomTabPanel from "./CustomTabPanel";
import MyProfile from "./Myprofile/MyProfile";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function ProfileSetting() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box>
        <TopBar />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <Box>
              <CustomTabPanel value={value} index={0}>
              <MyProfile/>
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileSetting;

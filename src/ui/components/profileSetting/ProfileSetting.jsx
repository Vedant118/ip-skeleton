import React from "react";
import TopBar from "../topBar/TopBar";
import Sidebar from "../sideBar/Sidebar";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import CustomTabPanel from "./CustomTabPanel";
import MyProfile from "./Myprofile/MyProfile";
import SelectTextFields from "../common/dropdownInput";

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
          <Box sx={{ padding: "10px", margin: "10px" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="My Profile"
                {...a11yProps(0)}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              />
              <Tab
                label="Security"
                {...a11yProps(1)}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              />
              <Tab
                label="Settings"
                {...a11yProps(2)}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              />
              <Tab
                label="Payment Methods"
                {...a11yProps(3)}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              />
              <Tab
                label="Billing Details"
                {...a11yProps(4)}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              />
            </Tabs>
            <Box>
              <CustomTabPanel value={value} index={0}>
                <MyProfile />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <SelectTextFields />
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileSetting;

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  CottageOutlined,
  BusinessCenterOutlined,
  RepeatOutlined,
  AnalyticsOutlined,
  GroupOutlined,
  HelpOutlineOutlined,
  TranslateOutlined,
  AccessibilityOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const {logout} = useAuth0()
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleLogout = (item) => {
    setSelectedItem(item);
    logout()
  };

  return (
    <Box>
      <Box
        sx={{
        //   width: "15%",
          height: "90vh",
          backgroundColor: 'rgba(15, 98, 93, 0.5)',
          padding: "85px",
          paddingBlock: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <SidebarItem
            icon={<CottageOutlined sx={{ color: "white" }} />}
            text="Home"
            onItemClick={() => handleItemClick("Home")}
            selected={selectedItem === "Home"}
          />
          <SidebarItem
            icon={<BusinessCenterOutlined sx={{ color: "white"  }} />}
            text="My IP Portfolio"
            onItemClick={() => handleItemClick("My IP Portfolio")}
            selected={selectedItem === "My IP Portfolio"}
          />
          <SidebarItem
            icon={<RepeatOutlined sx={{ color: "white"  }} />}
            text="My Renewals"
            onItemClick={() => {handleItemClick("My Renewals"),navigate('/renewals')}}
            selected={selectedItem === "My Renewals"}
          />
          <SidebarItem
            icon={<AnalyticsOutlined sx={{ color: "white"  }} />}
            text="My Analytics & Reports"
            onItemClick={() => handleItemClick("Analytics & Reports")}
            selected={selectedItem === "Analytics & Reports"}
          />
          <Box sx={{
            width: "100%",
            height: '1px',
            backgroundcolor: "white" ,
            marginBottom: "20px",
            marginTop: "20px"
          }} />
          <SidebarItem
            icon={<GroupOutlined sx={{ color: "white"  }} />}
            text="Group Management"
            onItemClick={() => handleItemClick("Group Management")}
            selected={selectedItem === "Group Management"}
          />
          <SidebarItem
            icon={<GroupOutlined sx={{ color: "white"  }} />}
            text="Group Portfolios"
            onItemClick={() => handleItemClick("Group Portfolios")}
            selected={selectedItem === "Group Portfolios"}
          />
        </Box>
        <Box>
          <Box sx={{
            width: "100%",
            height: '1px',
            backgroundcolor: "white",
            marginBottom: "20px",
            marginTop: "20px"
          }} />
          <SidebarItem
            icon={<HelpOutlineOutlined sx={{ color: "white"  }} />}
            text="Help"
            onItemClick={() => handleItemClick("Help")}
            selected={selectedItem === "Help"}
          />
          <SidebarItem
            icon={<TranslateOutlined sx={{ color: "white"  }} />}
            text="Language"
            onItemClick={() => handleItemClick("Language")}
            selected={selectedItem === "Language"}
          />
          <SidebarItem
            icon={<AccessibilityOutlined sx={{ color: "white"  }} />}
            text="Accessibility"
            onItemClick={() => handleItemClick("Accessibility")}
            selected={selectedItem === "Accessibility"}
          />
          <SidebarItem
            icon={<LogoutOutlined sx={{ color: "white"  }} />}
            text="Logout"
            onItemClick={() => handleLogout("Logout")}
            selected={selectedItem === "Logout"}
          />
        </Box>
      </Box>
    </Box>
  );
}

function SidebarItem({ icon, text, onItemClick, selected }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        backgroundColor: selected ? "white" : "transparent",
        padding: "10px",
        cursor: "pointer",
        width:'130%'
      }}
      onClick={onItemClick}
    >
      {icon}
      <Typography
        sx={{
            borderRadius:2,
          color: selected ? "black" : "white",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default Sidebar;

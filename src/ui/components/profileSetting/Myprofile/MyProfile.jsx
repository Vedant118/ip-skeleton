import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import SelectTextFields from "../../common/dropdownInput";
import BasicTextFields from "../../common/textInput";

function MyProfile() {
  const { user } = useAuth0();
  const [editMode, setEditMode] = useState(false);

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };
  const List = ({ title, subtitle, style }) => (
    <Box sx={{ ...style, fontFamily: "Noto Sans" }}>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", gap: "10rem" }}>
        <Box>
        <Box sx={{
          backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/2864/588d/7d4015780b60fc4bbfa1757a08eeb1d3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ek5DjykSLHIBOrq70GqCuK5W-F79hEq5AgPEiSHRqbjTiXzz5cGAgIDsBH1HLgjsIXztXRun3J50GWDJjmoHILUqP75hwo8S8HFGputMVeeKvVVffLZlXWa395k9--lhDS2T4JSG4QgkoXrtjvcM~yXdH7uJF0OFrOc2FhMcf4SM5sP1465p3hNTs0sCal7dyT32XaAxZmWz~50o6MGCCl58auXHRkfNdUTV-OyGo929I8eUaeILGBCiPRHZYS58jys5U6NoxI6YfYRmmbZj8Ghrv6U7Yq2QEA3JLTfm-MuZRuTFgnrzG2WsyoZvhdlYdgDbV4A74L3nWOmbNd-suA__")',
          width: '284px',
          height: '284px',
          borderRadius: '50%',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                display: "flex",
                gap: 0.5,
                fontWeight: "200",
                fontSize: "2.125rem",
              }}
              variant="p"
            >
              Hello 
              <Typography variant="h4" sx={{ fontWeight: "400" }}>
                Mr. John Doe
              </Typography>
            </Typography>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "grey",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <IconButton
                aria-label="delete"
                size="large"
                onClick={handleEditModeToggle}
              >
                <CreateOutlined sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
          {editMode ? (
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                <List title={"Title"} subtitle={"Mr ."} />
                <List title={"Last Name"} subtitle={"Doe"} />
                <List title={"Email Address"} subtitle={"ABC@gmail.com"} />
                <List title={"Business name"} subtitle={"ABC"} />
                <List
                  style={{ width: "60%" }}
                  title={"Business Address"}
                  subtitle={"285 Fulton Street · Manhattan, New York City, U.S"}
                />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                <List title={"First Name"} subtitle={"John"} />
                <List title={"Display Name"} subtitle={"-"} />
                <List title={"Telephone Number"} subtitle={"(212) 602-4000"} />
                <List title={"Language"} subtitle={"ENG"} />
                <List title={"Default Currency"} subtitle={"US Dollar"} />
              </Box>
            </Box>
          ) : (
            <Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <SelectTextFields title={"Title"} />
                  <BasicTextFields label={"First Name"} />
                  <BasicTextFields label={"Last Name"} />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <BasicTextFields label={"Display Name"} />
                  <SelectTextFields title={"Language"} />
                  <BasicTextFields label={"Telephone Number"} />
                </Box>
              </Box>
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "rgb(222 222 222)",
                  marginBlock: "2rem",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
                >
                  <List title={"Email Address"} subtitle={"ABC@gmail.com"} />
                  <List title={"Default Currency"} subtitle={"US Dollar"} />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
                >
                  <List title={"Business name"} subtitle={"ABC"} />
                  <List
                    style={{ width: "70%" }}
                    title={"Business Address"}
                    subtitle={
                      "B Block, 756, Oak Street, Westminster, United Kingdom"
                    }
                  />
                </Box>
              </Box>
              <Stack direction="row" spacing={2} sx={{ display: "flex",justifyContent:'flex-end',marginTop:'3.5rem' }}>
                <Button variant="outlined" sx={{width:'20ch',borderColor:'rgb(64 114 111)',color:'rgb(14 70 61)'}}>RESET</Button>
                <Button variant="contained" sx={{width:'20ch',backgroundColor:'rgb(75 165 158)',color:'white'}}>SAVE</Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default MyProfile;

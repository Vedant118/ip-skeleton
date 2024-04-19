import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

function MyProfile() {
  const { user } = useAuth0();
  const List = ({ title, subtitle, style }) => (
    <Box sx={style}>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );

  console.log("user :", user);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", gap: "10rem" }}>
        <Box>
          <img
            src={user?.picture}
            alt="profile"
            width={284}
            height={284}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Box>
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
              {user?.nickname}
            </Typography>
          </Typography>
          <Box
            sx={{
              display: "flex",
              //   alignItems: "center",
              //   flexWrap:'wrap',
              //   justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <List title={"First Name"} subtitle={"John"} />
              <List title={"Display Name"} subtitle={"-"} />
              <List title={"Telephone Number"} subtitle={"(212) 602-4000"} />
              <List title={"Language"} subtitle={"ENG"} />
              <List title={"Default Currency"} subtitle={"US Dollar"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MyProfile;

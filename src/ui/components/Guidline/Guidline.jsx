import { Box, Typography } from "@mui/material";
import React from "react";
import { Add, ArrowForward, QuestionAnswer } from "@mui/icons-material";
import Image from "../../../assets/image.png";
import Vector from "../../../assets";
function Guidline() {
  function Card({ changeIcon, title, buttonTitle }) {
    return (
      <Box
        sx={{
        //   width: "40%",
          backgroundColor: "#EEFCFC",
          display: "flex",
          flexDirection: "column",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              justifyContent: "flex-start",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Vector />
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              paddingTop: "30px",
              paddingBottom: "10px",
            }}
          >
            {changeIcon}
            <Typography
              variant="p"
              sx={{
                width: "65%",
                color: "rgba(0, 168, 159, 0.8)",
              }}
            >
              {/* "I'm Familiar with IP Solutions Portal and I know where I want
                to start" */}
              {title}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // width: "25%",
            // padding: 1,
            backgroundImage: Image,
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 168, 159, 0.8)",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="p"
            sx={{
              padding: 1,
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "14.5px",
              paddingLeft: "20px",
            }}
          >
            {/* START NOW  */}
            {buttonTitle}
            <ArrowForward sx={{ color: "white" }} />
          </Typography>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        height:'30vh'
      }}
    >
      <Typography
        variant="h5"
        sx={{
          paddingBottom: "10px",
        }}
      >
        What would you like to do today?
      </Typography>
      <Box
        sx={{
          padding: 1,
          display: "flex",
          gap: "20px",
        }}
      >
        <Card
          title={`"I'm Familiar with IP Solutions Portal and I know where I want
                to start"`}
          buttonTitle={"START NOW"}
          changeIcon={
            <Add
              sx={{
                width: 60,
                height: 60,
                color: "#4BA59E",
                display: "flex",
              }}
            />
          }
        />
        <Card
          title={`"I want some help and I'am not sure where to start"`}
          buttonTitle={"GUIDE ME"}
          changeIcon={
            <QuestionAnswer
              sx={{
                width: 60,
                height: 60,
                color: "#4BA59E",
                display: "flex",
              }}
            />
          }
        />
      </Box>
    </Box>
  );
}

export default Guidline;

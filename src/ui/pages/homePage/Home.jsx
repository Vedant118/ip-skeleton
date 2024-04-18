import React, { useState } from "react";
import TopBar from "../../components/topBar/TopBar";
import { Box, Button } from "@mui/material";
import Sidebar from "../../components/sideBar/Sidebar";
import Guidline from "../../components/Guidline/Guidline";
import CompletedTask from "../../components/Completedtask/CompletedTask";
import UpdateReminder from "../../components/Update_and_remainder/Update&Remainder";
import { useAuth0 } from "@auth0/auth0-react";
import Joyride from "react-joyride";
import { TwitterTweetEmbed } from "react-twitter-embed";

function CustomTooltip({
  continuous,
  index,
  isLastStep,
  size,
  step,
  backProps,
  primaryProps,
  skipProps,
  currentStepIndex,
}) {
  const { target, content } = step;
  const isTopBarStep = target === ".topbar";
  const isSidebarStep = target === ".Sidebar";
  const isTableCellStep = target === ".tablecell";

  let bottomPosition = "-20px";
  let width = "100%";
  let maxHeight = "none";
  let isPreviousDisabled = false;

  if (isTopBarStep) {
    bottomPosition = "-600px";
  } else if (isSidebarStep) {
    bottomPosition = "-700px";
    width = "90vw";
  } else if (isTableCellStep) {
    bottomPosition = "-100px";
    width = "0vw";
    maxHeight = "70vh";
    isPreviousDisabled = true;
  }

  return (
    <div>
      {index === currentStepIndex && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "4px",
            maxWidth: "400px",
            maxHeight: maxHeight,
            overflowY: "auto",
          }}
        >
          <p style={{ color: "black", marginBottom: "10px" }}>{content}</p>
        </div>
      )}
      <div
        className="main-container"
        style={{ bottom: bottomPosition, width: width }}
      >
        <div className="ButtonContainer">
          <br />
          <Button {...skipProps} className="Button">
            Skip
          </Button>
          <Button
            {...backProps}
            className="prevButton"
            style={{ color: isPreviousDisabled ? "grey" : "black" }}
            disabled={isPreviousDisabled}
          >
            Previous
          </Button>
          <Button {...primaryProps} className="Button">
            {isLastStep ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function CustomJoyride(props) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStepChange = (data) => {
    const { index } = data;
    setCurrentStepIndex(index);
  };

  return (
    <Joyride
      {...props}
      callback={handleStepChange}
      tooltipComponent={(tooltipProps) => (
        <CustomTooltip {...tooltipProps} currentStepIndex={currentStepIndex} />
      )}
    />
  );
}

function Home() {
  const [runJoyride, setRunJoyride] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const joyrideSteps = [
    {
      target: ".topbar",
      content: "This is a step for the TopBar",
      disableBeacon: true,
    },
    {
      target: ".Sidebar",
      content: "This is a step for the Sidebar",
    },
    {
      target: ".tablecell",
      content: "This is a step for the Table-Cell",
    },
  ];

  const handleJoyrideCallback = ({ action, index, type }) => {
    if (action === "finished" || type === "tour:end") {
      setRunJoyride(false);
    }
  };

  return isAuthenticated ? (
    <Box sx={{ position: "relative" }}>
      <Button
        sx={{ color: "black" }}
        onClick={() => logout({ returnTo: window.location.origin })}
        className="Login-Button"
      >
        Logout
      </Button>
      <Button sx={{ color: "black" }} onClick={() => setRunJoyride(true)}>
        Start Joyride
      </Button>
      <TopBar className="topbar" />
      <Box sx={{ display: "flex" }}>
        <span className="Sidebar">
          <Sidebar />
        </span>
        <Box sx={{ display: "flex", padding: "10px", gap: "10px" }}>
          <UpdateReminder className="UpdateReminder" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Guidline />
            <CompletedTask tablecell="tablecell" />
          </Box>
        </Box>
      </Box>
      <CustomJoyride
        steps={joyrideSteps}
        run={runJoyride}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        disableOverlayClose={true}
        disableScrolling={true}
        callback={handleJoyrideCallback}
      />
    </Box>
  ) : (
    <>
      <Button variant="outlined" onClick={loginWithRedirect}>
        Need To Login
      </Button>
      <TwitterTweetEmbed tweetId={"1778116984137245137"} />
    </>
  );
}

export default Home;

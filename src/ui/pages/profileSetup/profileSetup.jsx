import { useState } from "react";
import BackgroundTheme from "../../components/common/backgroundTheme";
import PasswordInput from "../../components/common/passwordInput";
import { Button, Stack } from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import RWS from "../../../assets/rws-logo.webp"
import "../../../App.css"


function ProfileSetup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordFilled, setPasswordFilled] = useState(false);
  const [confirmPasswordFilled, setConfirmPasswordFilled] = useState(false);


  const oncancel = () => {
    setPassword("");
    setConfirmPassword("");
    setPasswordFilled(false);
    setConfirmPasswordFilled(false);
  };

  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const validateLowercase = (password) => /[a-z]/.test(password);
  const validateNumberOrSymbol = (password) => /[\d@#$%^&*!]/.test(password);
  const validateUppercase = (password) => /[A-Z]/.test(password);

  return (
    <div className="maincntr">
      <BackgroundTheme />
      <div className="profileForm">
        <div>
          <img src={RWS} alt="image" className="RWSimg" />
          <h2>Profile Setup</h2>
          <p>Please create your password</p>
          <PasswordInput
            label={"Password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordFilled(e.target.value.length > 0);
            }}
            helperText={
              !validatePassword(password) && passwordFilled
                ? "Password doesn't fulfill the criteria"
                : ""
            }
          />
          <PasswordInput
            label={"Confirm Password"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordFilled(e.target.value.length > 0);
            }}
          />
          <Stack direction="row" spacing={2} marginTop={5}>
            <Button
              variant="outlined"
              sx={{ width: "21ch" }}
              onClick={oncancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={
                !validatePassword(password) ||
                password !== confirmPassword ||
                !passwordFilled ||
                !confirmPasswordFilled
              }
              sx={{ width: "21ch" }}
              onClick={() => {
                window.location.href = '/Dashboard';
                oncancel();
                alert('Login Sucessfully')
              }}
            >

              Submit
            </Button>
          </Stack>
        </div>
        <div className="horizontalline" />
        <Stack spacing={1}>
          <h4 style={{
            marginBottom: 30
          }}>Your Password should have at least</h4>
          <span
            className="span"
            style={{
              color:
                password.length === 0 || validatePassword(password)
                  ? "black"
                  : "red",
            }}
          >
            {password.length === 0 ? (
              <Check style={{ color: "black" }} />
            ) : !validatePassword(password) ? (
              <Close style={{ color: "red" }} />
            ) : (
              <Check style={{ color: "green" }} />
            )}
            8 characters
          </span>

          <span
            className="span"
            style={{
              color:
                password.length === 0 || validateLowercase(password)
                  ? "black"
                  : "red",
            }}
          >
            {password.length === 0 ? (
              <Check style={{ color: "black" }} />
            ) : !validateLowercase(password) ? (
              <Close style={{ color: "red" }} />
            ) : (
              <Check style={{ color: "green" }} />
            )}
            One Lowercase Letter
          </span>
          <span
            className="span"
            style={{
              color:
                password.length === 0 || validateNumberOrSymbol(password)
                  ? "black"
                  : "red",
            }}
          >
            {password.length === 0 ? (
              <Check style={{ color: "black" }} />
            ) : !validateNumberOrSymbol(password) ? (
              <Close style={{ color: "red" }} />
            ) : (
              <Check style={{ color: "green" }} />
            )}
            One Number or Symbol
          </span>
          <span
            className="span"
            style={{
              color:
                password.length === 0 || validateUppercase(password)
                  ? "black"
                  : "red",
            }}
          >
            {password.length === 0 ? (
              <Check style={{ color: "black" }} />
            ) : !validateUppercase(password) ? (
              <Close style={{ color: "red" }} />
            ) : (
              <Check style={{ color: "green" }} />
            )}
            One Uppercase Letter
          </span>
        </Stack>
      </div>
    </div>
  );
}

export default ProfileSetup;

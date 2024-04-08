import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function PasswordInput({ label, value, onChange, helperText }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "33ch" }} variant="outlined">
        <InputLabel htmlFor="password">{label}</InputLabel>
        <OutlinedInput
          error={helperText ? true : false}
          helperText={helperText}
          onChange={onChange}
          value={value}
          placeholder={label}
          multiline
          id="password"
          type={showPassword ? "text" : "password"}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

export default PasswordInput;

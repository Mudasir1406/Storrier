import React from "react";
import { TextField } from "@mui/material";
const AuthInput = ({ label, onChange }) => {
  return (
    <TextField
      id="standard-search"
      label={label}
      type="search"
      variant="standard"
      sx={{ margin: 2 }}
      fullWidth={true}
      onChange={onChange}
    />
  );
};

export default AuthInput;

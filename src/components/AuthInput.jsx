import React from "react";
import { TextField } from "@mui/material";
const AuthInput = ({ label, onChange }) => {
  return (
    <TextField
      id="standard-search"
      label={label}
      type={label === "Password" ? "password" : "search"}
      variant="standard"
      sx={{ margin: 2 }}
      fullwidth="true"
      onChange={onChange}
    />
  );
};

export default AuthInput;

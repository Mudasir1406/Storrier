import { Typography } from "@mui/material";
import React from "react";

const AuthHeading = ({ lable }) => {
  return (
    <Typography variant="h4" sx={{ marginY: 3, marginX: 1 }}>
      {lable}
    </Typography>
  );
};

export default AuthHeading;

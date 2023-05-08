import { Button } from "@mui/material";
import React from "react";

const AuthButton = ({ lable, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        marginY: 3,
        marginRight: 6,
        marginLeft: 2,
        paddingY: 1.5,
      }}
      size="large"
    >
      {lable}
    </Button>
  );
};

export default AuthButton;

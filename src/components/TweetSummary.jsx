import React from "react";
import { Typography, Paper } from "@mui/material";

const TweetSummary = ({ heading, summary }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "16px",
        borderTopRightRadius: "16px",
        borderBottomLeftRadius: "16px",
        maxWidth: 1000,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {heading}
      </Typography>
      <Typography variant="body1">{summary}</Typography>
    </Paper>
  );
};

export default TweetSummary;

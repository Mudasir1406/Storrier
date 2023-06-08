import React from "react";
import { Typography, Paper } from "@mui/material";

const TweetSummary = ({ heading, summary }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        padding: "16px",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingX: 5,
        paddingY: 5,
        margin: 20,
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        alignSelf="center"
        color="ThreeDHighlight"
      >
        Summary
      </Typography>
      <Typography variant="h2" gutterBottom alignSelf="center">
        {heading}
      </Typography>
      <Typography variant="body1">{summary}</Typography>
    </Paper>
  );
};

export default TweetSummary;

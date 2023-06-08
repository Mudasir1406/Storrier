import React from "react";
import { Avatar, Typography, Paper, Link } from "@mui/material";

const TweetComponent = ({
  userProfileImage,
  userName,
  tweetDate,
  tweetText,
  tweetLink,
  sentiment,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "16px",
        marginBottom: "16px",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        marginX: "40px",
      }}
    >
      <Avatar
        src={userProfileImage}
        sx={{ width: 64, height: 64, marginRight: "16px" }}
      />

      <div>
        <div
          style={{
            width: 15,
            height: 15,
            color: "black",
            backgroundColor:
              sentiment === "negative"
                ? "red"
                : sentiment === "positive"
                ? "green"
                : "grey",
            borderRadius: 20,
            position: "absolute",
            right: 50,
          }}
        ></div>
        <Typography variant="h6" gutterBottom>
          {userName}
        </Typography>

        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {tweetDate}
        </Typography>
        <Typography variant="body1">{tweetText}</Typography>

        {tweetLink && (
          <Link href={tweetLink} target="_blank" rel="noopener noreferrer">
            {tweetLink}
          </Link>
        )}
      </div>
    </Paper>
  );
};

export default TweetComponent;

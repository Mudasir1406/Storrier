import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TimelineCard = ({ heading, description, userName, date, alignSelf }) => {
  return (
    <Card
      sx={{
        marginY: 3,
        marginX: 3,
        display: "flex",
        flexDirection: "row",
        maxWidth: 750,
        boxShadow: "1px 2px 20px rgba(0,0,0,0.5)",
        alignSelf: alignSelf,
        borderRadius: 3,
      }}
    >
      <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          alt="image"
          height="200"
          image={require("../assets/timeline.png")}
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 350,
            resize: "contain",
            margin: 2,
            borderRadius: 2,
          }}
        />
        <CardContent>
          <Typography variant="h5">{heading}</Typography>
          <Typography
            variant="body2"
            marginY={2}
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#F5F5F5",
              padding: 2,
              borderRadius: 3,
            }}
          >
            <img
              src={require("../assets/profile.png")}
              alt=""
              style={{
                width: 50,
                height: 50,
                resize: "contain",
                borderRadius: 10,
              }}
            />
            <Box sx={{ marginX: 2 }}>
              <Typography variant="h6">{userName}</Typography>
              <Typography variant="body2">{date}</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TimelineCard;

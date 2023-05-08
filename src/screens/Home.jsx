import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { SearchBar, TimelineCard } from "../components";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          display: "flex",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <SearchBar />
          <Button variant="contained" sx={{ height: 50 }}>
            Search
          </Button>
        </Box>
        <Typography variant="h1">Timeline</Typography>
        <div
          style={{
            borderLeft: "10px solid black",
            height: document.body.offsetHeight
              ? document.body.offsetHeight
              : window.innerHeight * 2,
            position: "absolute",
            left: "50%",
            marginLeft: "-3",
            top: "50%",
            borderRadius: 100,
          }}
        ></div>
        <TimelineCard
          heading="12 Mobile UX Design Trends For 2018"
          description="Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner"
          userName="Jon Kantner"
          date="July 14 , 2022"
          alignSelf="flex-start"
        />
        <TimelineCard
          heading="12 Mobile UX Design Trends For 2018"
          description="Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner"
          userName="Jon Kantner"
          date="July 14 , 2022"
          alignSelf="flex-end"
        />
        <TimelineCard
          heading="12 Mobile UX Design Trends For 2018"
          description="Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner"
          userName="Jon Kantner"
          date="July 14 , 2022"
          alignSelf="flex-start"
        />
        <TimelineCard
          heading="12 Mobile UX Design Trends For 2018"
          description="Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner"
          userName="Jon Kantner"
          date="July 14 , 2022"
          alignSelf="flex-start"
        />
        <TimelineCard
          heading="12 Mobile UX Design Trends For 2018"
          description="Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner"
          userName="Jon Kantner"
          date="July 14 , 2022"
          alignSelf="flex-start"
        />
      </Box>
    </div>
  );
};

export default Home;

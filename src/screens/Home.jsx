import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { SearchBar, TimelineCard } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GRAPH_URL } from "../navigation/PageLinks";
const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [timelineData, setTimelineData] = useState([]);
  const hangleOnchangeText = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmitSearch = async () => {
    await axios
      .post("http://127.0.0.1:443/api/search", {
        keyword: search,
      })
      .then((res) => {
        setTimelineData([res.data.Summary_data]);
      })
      .catch((e) => console.log(e));
  };
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
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
          <SearchBar onChange={hangleOnchangeText} search={search} />
          <Button
            variant="contained"
            sx={{ height: 50 }}
            onClick={handleSubmitSearch}
          >
            Search
          </Button>
        </Box>
        <Typography variant="h1">Timeline</Typography>
        {timelineData.length > 0 ? (
          <>
            <div
              style={{
                borderLeft: "10px solid black",
                height: windowSize.current[1] * 3,
                position: "absolute",
                left: "50%",
                marginLeft: "-3",
                top: "60%",
                borderRadius: 100,
              }}
            ></div>

            {timelineData.map((item, index) => {
              return index % 2 === 0 ? (
                <TimelineCard
                  heading={item?.title}
                  description={item?.summary}
                  userName="Jon Kantner"
                  date={item.date.slice(0, 10)}
                  alignSelf="flex-start"
                  onClick={() => {
                    navigate(GRAPH_URL, {
                      state: {
                        title: item?.title,
                        summary: item?.summary,
                      },
                    });
                  }}
                />
              ) : (
                <TimelineCard
                  heading="12 Mobile UX Design Trends For 2018"
                  description="Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner"
                  userName="Jon Kantner"
                  date="July 14 , 2022"
                  alignSelf="flex-end"
                />
              );
            })}
          </>
        ) : (
          <Typography>Search Some Trands</Typography>
        )}
      </Box>
    </div>
  );
};

export default Home;

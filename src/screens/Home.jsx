import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { SearchBar, TimelineCard } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GRAPH_URL } from "../navigation/PageLinks";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [timelineData, setTimelineData] = useState([]);
  const hangleOnchangeText = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmitSearch = async () => {
    setLoading(true);
    await axios
      .post(
        "http://127.0.0.1:5000/api/search",
        {
          keyword: search,
        },
        {
          timeout: 2000000,
        }
      )
      .then((res) => {
        const data = [...timelineData];
        data.unshift(res.data.Summary_data);
        setTimelineData(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/summaries")
      .then((res) => {
        console.log(res);
        setTimelineData(res?.data?.Summary_data?.reverse());
      })
      .catch((e) => console.log(e));
  }, []);
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
          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              sx={{ height: 50, borderRadius: 20 }}
              onClick={handleSubmitSearch}
            >
              Search
            </Button>
          )}
        </Box>
        <Typography variant="h1">Timeline</Typography>
        {timelineData?.length > 0 ? (
          <>
            <div
              style={{
                borderLeft: "10px solid #1976d2",
                height: windowSize.current[1] * 5,
                position: "absolute",
                left: "50%",
                marginLeft: "-3",
                top: "60%",
                borderRadius: 100,
              }}
            ></div>

            {timelineData.reverse().map((item, index) => {
              return index % 2 === 0 ? (
                <TimelineCard
                  heading={item?.keyword}
                  description={item?.summary}
                  userName="Jon Kantner"
                  date={item?.created_at?.slice(0, 10)}
                  influence_count={item?.influence_count}
                  alignSelf="flex-start"
                  onClick={() => {
                    navigate(GRAPH_URL, {
                      state: {
                        title: item?.keyword,
                        summary: item?.summary,
                      },
                    });
                  }}
                />
              ) : (
                <TimelineCard
                  heading={item?.keyword}
                  description={item?.summary}
                  userName="Jon Kantner"
                  date={item?.created_at?.slice(0, 10)}
                  alignSelf="flex-end"
                  influence_count={item?.influence_count}
                  onClick={() => {
                    navigate(GRAPH_URL, {
                      state: {
                        title: item?.keyword,
                        summary: item?.summary,
                      },
                    });
                  }}
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

import { useState, useEffect } from "react";

import "reactflow/dist/style.css";

import { useLocation } from "react-router-dom";
import "./text-updater-node.css";
import axios from "axios";
import { TweetComponent, TweetSummary } from "../components";
import { Typography } from "@mui/material";

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component

const GraphComponent = () => {
  const location = useLocation();
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(location.state.title);
    setLoading(true);
    const data = [];
    axios
      .get(`http://127.0.0.1:5000/api/tweets/${location?.state?.title}`)
      .then((res) => {
        console.log(res);
        res?.data?.posts?.map((item, index) => {
          data.push({
            id: item?.id,
            data: {
              user_image: item?.user_image,
              user_name: item?.user_name,
              posted: item?.posted,
              text: item?.text,
              url: item?.url,
              sentiment: item?.sentiment,
            },
          });
        });
      })
      .then(() => {
        console.log(data);
        setNodes(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    //console.log(nodes);
  }, [nodes]);

  return (
    <>
      {loading || !nodes ? null : (
        <div style={{ height: window.innerHeight, width: window.innerWidth }}>
          <TweetSummary
            heading={location?.state?.title}
            summary={location?.state?.summary}
          />
          <Typography
            variant="h1"
            color="textSecondary"
            gutterBottom
            sx={{ margin: 10 }}
          >
            Tweets
          </Typography>
          {nodes?.map((item, index) => {
            console.log(item);
            return (
              <TweetComponent
                userProfileImage={item?.data?.user_image}
                userName={item?.data?.user_name}
                tweetDate={item?.data?.posted}
                tweetLink={item?.data?.url}
                tweetText={item?.data?.text}
                sentiment={item?.data?.sentiment}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default GraphComponent;

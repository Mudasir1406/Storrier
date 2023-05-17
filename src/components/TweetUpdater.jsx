import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import TweetComponent from "./TweetComponent";
const TweetUpdater = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div>
      <Handle
        type="target"
        id="a"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <TweetComponent
        userProfileImage={data?.user_image}
        userName={data?.user_name}
        tweetDate={data?.posted?.slice(0, 10)}
        tweetText={data?.text}
        tweetLink={data?.url}
      />
    </div>
  );
};

export default TweetUpdater;

import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import TweetSummary from "./TweetSummary";

const TextUpdaterNode = ({ data, isConnectable }) => {
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
      <TweetSummary heading={data?.heading} summary={data?.summary} />
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default TextUpdaterNode;

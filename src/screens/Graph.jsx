import { useCallback, useState, useMemo, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { shallow } from "zustand/shallow";
import useStore from "../store";
import { TextUpdaterNode, TweetComponent } from "../components";
import { useLocation } from "react-router-dom";
import "./text-updater-node.css";
import axios from "axios";
import TweetUpdater from "../components/TweetUpdater";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setNodes: state.setNodes,
});
const rfStyle = {
  backgroundColor: "#fff",
  width: "100%",
  height: "100%",
};

const initialEdges = [
  { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
  { id: "edge-2", source: "node-1", target: "node-3", sourceHandle: "b" },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component

const GraphComponent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [initialNodes, setInitialNodes] = useState([
    {
      id: "node-1",
      type: "textUpdater",
      position: { x: -100, y: -100 },
      data: {
        value: 123,
        heading: location?.state?.title,
        summary: location?.state?.summary,
      },
    },
    {
      id: "node-2",
      type: "tweetUpdater",
      targetPosition: "top",
      position: {
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * -100),
      },
      data: { text: "asdasdasdasd" },
    },
  ]);
  const nodeTypes = useMemo(
    () => ({
      textUpdater: TextUpdaterNode,
      tweetUpdater: TweetUpdater,
    }),
    []
  );

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes } =
    useStore(selector, shallow);
  useEffect(() => {
    setLoading(true);
    const data = [];
    axios
      .get(`http://127.0.0.1:443/api/tweets/${location.state.title}`)
      .then((res) => {
        res?.data?.posts?.map((item, index) => {
          data.push({
            id: item?.id,
            type: "tweetUpdater",
            targetPosition: "top",
            position: {
              x: Math.floor(Math.random() * 500 * index),
              y: Math.floor(Math.random() * -500 * index),
            },
            data: {
              user_image: item?.user_image,
              user_name: item?.user_name,
              posted: item?.posted,
              text: item?.text,
              url: item?.url,
            },
          });
        });
      })
      .then(() => {
        console.log("data");
        setNodes(initialNodes);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  return (
    <>
      {loading || !nodes ? null : (
        <div style={{ height: window.innerHeight, width: window.innerWidth }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            onEdgesChange={onEdgesChange}
            style={rfStyle}
          >
            <Background
              variant="dots"
              gap={12}
              size={1}
              style={{ backgroundColor: "lightblue" }}
            />
            <Controls />
          </ReactFlow>
        </div>
      )}
    </>
  );
};

export default GraphComponent;

import { Canvas } from "react-three-fiber";

import React from "react";
const MainScene = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        position: "absolute",
        zIndex: -1,
      }}
    ></Canvas>
  );
};

export default MainScene;

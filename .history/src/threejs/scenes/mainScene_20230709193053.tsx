import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

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

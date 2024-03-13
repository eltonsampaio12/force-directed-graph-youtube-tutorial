import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const MainScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0], far: 1200 }}
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

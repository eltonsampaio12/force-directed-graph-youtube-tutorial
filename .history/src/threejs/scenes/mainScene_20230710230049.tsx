import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import NodeVisualizer from "../units/nodes/uses cases/visualize nodes/nodesVisualizer";
import { ForceDirectedComp } from "../components/forceDirectedComp";

const MainScene = (props: {
  attractiveForce: number;
  repulsiveForce: number;
}) => {
  const canvasRef: any = useRef();
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);
  const [graphChanged, setGraphChanged] = useState<boolean>(false);
  const [newNodeAdded, setNewNodeAdded] = useState<boolean>(false);

  return (
    <Canvas
      camera={{ position: [0, 0, 4000], far: 9000 }}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "absolute",
        zIndex: -1,
      }}
      frameloop="demand"
      ref={canvasRef}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} />
      <OrbitControls
        enablePan={true}
        enableRotate={true}
        mouseButtons={{
          LEFT: THREE.MOUSE.PAN,
          RIGHT: THREE.MOUSE.ROTATE,
        }}
        maxDistance={20000}
        minDistance={15}
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}
        minPolarAngle={0}
        maxPolarAngle={Math.PI * 2}
        rotateSpeed={0.1}
        ref={orbitControlsRef}
      />
      <NodeVisualizer setNewNodeAdded={setNewNodeAdded} />
      <ForceDirectedComp
        setGraphChanged={setGraphChanged}
        newNodeAdded={newNodeAdded}
        attractiveForce={attractiveForce}
        repulsiveForce={repulsiveForce}
      />
    </Canvas>
  );
};

export default MainScene;

import * as THREE from "three";
import { Line, Text } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { Node_ } from "../entities/node";
import { useMemo, useRef } from "react";
import React from "react";

const lineMaterial: any = new THREE.LineSegments();

const NodeComp = (props: { node: Node_; onClick: (node: Node_) => void }) => {
  const nodeRef: any = useRef();

  const points = useMemo(() => {
    return props.node
      .getNeighbors()
      .map((paper: any) => [
        new THREE.Vector3(props.node.position.x, props.node.position.y, 0),
        new THREE.Vector3(paper.position.x, paper.position.y, 0),
      ]);
  }, [
    props.node.getNeighbors()[0]?.position.x,
    props.node.getNeighbors()[0]?.position.y,
    props.node.getNeighbors()[0]?.position.z,
  ]);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    props.onClick(props.node);
  };

  return (
    <group ref={nodeRef} args={[]}>
      <mesh
        position={[props.node.position.x, props.node.position.y, 0]}
        onClick={handleClick}
      >
        <circleGeometry args={[props.node.size * 3, 32]} />
        <meshStandardMaterial attach="material" color={"#00aaff"} />
      </mesh>
      <mesh>
        <Text
          position={[props.node.position.x, props.node.position.y, 0]}
          anchorY="top"
          anchorX="center"
          color="black"
          fontSize={60}
          maxWidth={10}
          outlineColor="black"
          lineHeight={1}
          textAlign="center"
          outlineWidth={2}
        >
          {props.node.val}
        </Text>
      </mesh>
      <group>
        {points.map((points, index) => (
          <Line
            key={index}
            points={points}
            color="grey"
            material={lineMaterial}
            linewidth={0.2}
          />
        ))}
      </group>
    </group>
  );
};

export default NodeComp;

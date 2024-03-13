import * as THREE from "three";
import { Line, Text } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { Node_ } from "../entities/node";
import { useRef } from "react";
import React from "react";

const lineMaterial: any = new THREE.LineSegments();

const NodeComp = (props: { node: Node_ }) => {
  const nodeRef: any = useRef();


  const points = useMemo(() => {
    return props.node.getNeighbors().map((paper: any) => [
      new THREE.Vector3(
        props.node.position.x,
        props.node.position.y,
        props.node.position.z
      ),
      new THREE.Vector3(paper.position.x, paper.position.y, paper.position.z),
    ]);
  }, [
    props.node.getNeighbors()[0]?.position.x,
    props.node.getNeighbors()[0]?.position.y,
    props.node.getNeighbors()[0]?.position.z,
  ]);
  return (
    <group ref={nodeRef} args={[]}>
      <mesh
        position={[
          props.node.position.x,
          props.node.position.y,
          props.node.position.z,
        ]}
      >
        <sphereGeometry args={[props.node.size, 20, 20]} />
      </mesh>
      <mesh>
        <meshStandardMaterial attach="material" color={"white"} />
        <Text
          position={[
            props.node.position.x,
            props.node.position.y + props.node.size + 50,
            props.node.position.z,
          ]}
          anchorY="top"
          anchorX="center"
          color="#F4D35E"
          fontSize={60}
          maxWidth={20}
          outlineColor="black"
          lineHeight={1}
          textAlign="center"
          outlineWidth={2}
        >
          {props.node.val}
        </Text>
      </mesh>
      <group>
        {props.node.getNeighbors().map(())}
      </group>
    </group>
  );
};

export default NodeComp;

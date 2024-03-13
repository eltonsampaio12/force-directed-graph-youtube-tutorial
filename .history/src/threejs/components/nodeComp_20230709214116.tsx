import * as THREE from "three";
import { Line, Text } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { Node_ } from "../entities/node";
import { useRef } from "react";

const lineMaterial: any = new THREE.LineSegments();

const nodeComp = (props: { node: Node_ }) => {
  const nodeRef: any = useRef();

  return (
    <group ref={nodeRef} args={[]}>
      <mesh>
        <sphereGeometry args={[props.node.size, 20, 20]} />
      </mesh>
      <mesh>
        <meshStandardMaterial attach="material" color={"white"} />

        <Text
          position={[
            props.node.position.x,
            props.node.position.y + props.node.size + 200,
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
          props.node.val
        </Text>
      </mesh>
    </group>
  );
};

export default nodeComp;

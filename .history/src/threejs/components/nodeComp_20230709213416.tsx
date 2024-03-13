import * as THREE from "three";
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
    </group>
  );
};

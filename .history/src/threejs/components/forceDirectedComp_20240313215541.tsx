import { useEffect, useState } from "react";
import { Graph } from "../entities/graph";
import { useFrame } from "@react-three/fiber";
import {
  calculateAttractiveForces,
  calculateRepulsiveForce,
  moveNodes,
} from "../units/clustering/uses cases/position nodes/forceDirected";

export function ForceDirectedComp(props: {
  setGraphChanged: React.Dispatch<React.SetStateAction<boolean>>;
  newNodeAdded: boolean;
  attractiveForce: number;
  repulsiveForce: number;
}) {
  const w = 3000;
  const h = 3000;
  const area = w * h;
  const k = Math.sqrt(area / Graph.getInstance().nodes.length);
  const maxIteractions = 200;
  const repulsiveDistance = 2000;
  const attractiveDistance = 800;
  const [iteractions, setIteractions] = useState<number>(1);
  const radius = 5;
  const [tempState, setTemp] = useState<number>(w / 10);
  const [phaseRan, setPhaseRan] = useState<number>(0);

  function cool(temp_: number): number {
    if (temp_ > 0.001) return temp_ * 0.99;
    else return 0;
  }

  useEffect(() => {
    setTemp((prev: number) => cool(prev));
  }, [phaseRan]);

  useEffect(() => {
    setIteractions(1);
    setTemp(w / 10);
    props.setGraphChanged((prev) => !prev);
  }, [props.newNodeAdded, props.attractiveForce, props.attractiveForce]);

  useFrame(() => {
    //uncomment this to run just a few iteractions
    /*
    if (iteractions >= maxIteractions) {
      props.setGraphChanged((prev) => !prev);
      return;
    }
    */

    for (let node of Graph.getInstance().nodes) {
      calculateRepulsiveForce(node, k, repulsiveDistance, props.repulsiveForce);

      calculateAttractiveForces(
        node,
        k,
        attractiveDistance,
        props.attractiveForce
      );
    }

    moveNodes(Graph.getInstance().nodes, tempState);
    setIteractions((prev: number) => prev + 1);
    setPhaseRan((prev: number) => prev + 1);
    props.setGraphChanged((prev) => !prev);
  });
  return null;
}

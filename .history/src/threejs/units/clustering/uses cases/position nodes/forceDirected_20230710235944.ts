import { Graph } from "../../../../entities/graph";
import { Node_ } from "../../../../entities/node";

function calculateRepulsiveForce(
  node: Node_,
  k: number,
  repulsionDistance: number,
  force: number
): void {
  const disconnectedNodes = Graph.getInstance().nodes.filter((item) => {
    const neighbors = node.getNeighbors();
    return neighbors !== undefined && !neighbors.includes(item);
  });

  const nodePosition = node.position;
  const nodeForce = node.force;

  for (const child of disconnectedNodes) {
    if (node !== child) {
      const direction = nodePosition.clone().sub(child.position);
      const distance = direction.length();

      if (distance !== 0) {
        const distanceDirection = direction
          .clone()
          .normalize()
          .divideScalar(distance);
        const repulsion = Math.pow(k, 2) / distance;
        const repulsiveForce = distanceDirection.multiplyScalar(repulsion);
        nodeForce.add(repulsiveForce.multiplyScalar(force));
      }
    }
  }
}

function calculateAttractiveForces(
  node: Node_,
  k: number,
  attractiveDistance: number,
  force: number
) {
  const neighbors = node.getNeighbors();
  if (!neighbors) return;

  const nodePosition = node.position;
  const nodeForce = node.force;

  for (const child of neighbors) {
    if (node !== child) {
      const direction = nodePosition.clone().sub(child.position);
      const distance = direction.length();

      if (distance !== 0) {
        const distanceDirection = direction
          .clone()
          .normalize()
          .divideScalar(distance);
        const attraction = (distance * distance) / k;
        const attractiveForce = distanceDirection.multiplyScalar(attraction);

        nodeForce.sub(attractiveForce.multiplyScalar(force));
        child.force.add(attractiveForce.multiplyScalar(force));
      }
    }
  }
}

function moveNodes(nodes: Node_[], temp: number) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const forceMag = node.force.length();

    if (forceMag > 0.001) {
      const dirMag = node.force.divideScalar(forceMag);
      const min_ = Math.min(forceMag, temp);
      dirMag.clampLength(0.1, 0.91);
      node.position.add(dirMag.multiplyScalar(min_ * 0.91));
    }
  }
}

export { calculateAttractiveForces, calculateRepulsiveForce, moveNodes };

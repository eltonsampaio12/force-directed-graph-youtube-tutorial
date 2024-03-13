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

  disconnectedNodes.forEach((child) => {
    if (node !== child) {
      const direction = node.position.clone().sub(child.position);
      const squaredDistance = direction.lengthSq();

      if (squaredDistance !== 0) {
        const distanceDirection = direction.clone().normalize();
        const repulsion = Math.pow(k, 2) / squaredDistance;
        const repulsiveForce = distanceDirection.multiplyScalar(repulsion);
        node.force.add(repulsiveForce.multiplyScalar(force));
      }
    }
  });
}

function calculateAttractiveForces(
  node: Node_,
  k: number,
  attractiveDistance: number,
  force: number
) {
  node.getNeighbors().forEach((child) => {
    if (node !== child) {
      const direction = node.position.clone().sub(child.position);
      const squaredDistance = direction.lengthSq();

      if (squaredDistance !== 0) {
        const distanceDirection = direction.clone().normalize();
        const attraction = (squaredDistance * squaredDistance) / k;
        const attractiveForce = distanceDirection.multiplyScalar(attraction);

        node.force.sub(attractiveForce.multiplyScalar(force));
        child.force.add(attractiveForce.multiplyScalar(force));
      }
    }
  });
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

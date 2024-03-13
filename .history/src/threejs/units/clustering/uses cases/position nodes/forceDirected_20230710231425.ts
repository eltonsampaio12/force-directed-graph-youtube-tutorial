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
      let direction = node.position.clone().sub(child.position);
      let distance = direction.length();

      if (distance !== 0) {
        let distanceDirection = direction
          .clone()
          .normalize()
          .divideScalar(distance);
        let repulsion = Math.pow(k, 2) / distance;
        let repulsiveForce = distanceDirection.multiplyScalar(repulsion);
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
      let direction = node.position.clone().sub(child.position);
      let distance = direction.length();

      if (distance !== 0) {
        let distanceDirection = direction
          .clone()
          .normalize()
          .divideScalar(distance);
        let attraction = (distance * distance) / k;
        let attractiveForce = distanceDirection.multiplyScalar(attraction);

        node.force.sub(attractiveForce.multiplyScalar(force));
        child.force.add(attractiveForce.multiplyScalar(force));
      }
    }
  });
}

function moveNodes(nodes: Node_[], temp: number) {
  nodes.forEach((node) => {
    let forceMag = node.force.length();
    if (forceMag > 0.001) {
      let dirMag = node.force.divideScalar(forceMag);
      let min_ = Math.min(forceMag, temp);
      dirMag.clampLength(0.1, 0.91);
      node.position.add(dirMag.multiplyScalar(min_ * 0.91));
    }
  });
}

export { calculateAttractiveForces, calculateRepulsiveForce, moveNodes };

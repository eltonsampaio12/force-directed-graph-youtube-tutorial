import { Node_ } from "../../../../entities/node";

function calculateRepulsiveForce(
  node: Node_,
  nodes: Node_[],
  k: number,
  repulsionDistance: number
): void {
  const disconnectedNodes = nodes.filter(
    (item) => !node.getNeighbors()?.includes(item)
  );

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
        node.force.add(repulsiveForce.multiplyScalar(2));
      }
    }
  });
}
function calculateAttractiveForces(
  node: Node_,
  k: number,
  attractiveDistance: number
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

        node.force.sub(attractiveForce.multiplyScalar(0.7));
        child.force.add(attractiveForce.multiplyScalar(0.7));
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
      dirMag.clampLength(0.1, 0.99);
      node.position.add(dirMag.multiplyScalar(min_ * 0.91));
    }
  });
}

export { calculateAttractiveForces, calculateRepulsiveForce, moveNodes };

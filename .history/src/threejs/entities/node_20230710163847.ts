import * as THREE from "three";

export class Node_ {
  public val: string = "";
  public position: THREE.Vector3;
  public force: THREE.Vector3;
  public range: number = 2000;
  private max = 1000;
  public size: number = 16;
  private neighbors: Node_[];

  constructor(val: string, size: number) {
    this.position = new THREE.Vector3(
      Math.random() * this.range,
      Math.random() * this.range,
      Math.floor(Math.random() * this.max)
    );
    this.force = new THREE.Vector3(0, 0, 0);
    this.size = size;
    this.neighbors = [];
    this.val = val;
  }

  addNeighbor(neighbor: Node_) {
    this.neighbors.push(neighbor);
    neighbor.neighbors.push(this);
  }

  getNeighbors() {
    return this.neighbors;
  }
}

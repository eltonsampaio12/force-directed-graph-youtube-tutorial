import * as THREE from "three";

class Node_ {
  public val: string = "";
  public position: THREE.Vector3;
  public force: THREE.Vector3;
  public range: number = 3000;
  private max = 2000;
  private size: number = 16;

  constructor() {
    this.position = new THREE.Vector3(
      Math.random() * this.range,
      Math.random() * this.range,
      Math.floor(Math.random() * this.max)
    );
    this.force = new THREE.Vector3(0, 0, 0);
  }
}
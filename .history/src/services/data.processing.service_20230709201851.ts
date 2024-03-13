import { Graph } from "../threejs/entities/graph";
import { Node_ } from "../threejs/entities/node";

export class DataProcessorService {
  processData(data: {}) {
    for (const [nodeJson, neighborsJson] of Object.entries(data)) {
      const node = this.createNode(nodeJson);
      let neighbors: any = neighborsJson;
      for (const n of neighbors) {
        const neighbor = this.createNode(n);
        node.addNeighbor(neighbor);
      }
    }
  }

  createNode(nodeJson: string) {
    let node: Node_ = Graph.getInstance().nodesHash.get(
      nodeJson.toLowerCase()
    ) as Node_;

    if (node === undefined) {
      node = new Node_(nodeJson, 20);
      Graph.getInstance().addNode(node);
      return node;
    }
    return node;
  }
}

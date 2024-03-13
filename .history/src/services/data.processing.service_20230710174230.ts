import { Graph } from "../threejs/entities/graph";
import { Node_ } from "../threejs/entities/node";

export class DataProcessorService {
  processData(data: { [key: string]: string[] }) {
    Graph.getInstance().clearNodes();

    for (const [nodeJson, neighborsJson] of Object.entries(data)) {
      const node = this.createNode(nodeJson);
      const neighbors: string[] = neighborsJson;

      for (const neighbor of neighbors) {
        const neighborNode: Node_ = this.createNode(neighbor);
        node.addNeighbor(neighborNode);
      }
    }
  }

  createNode(nodeJson: string): Node_ {
    const normalizedNodeJson = nodeJson.toLowerCase();
    let node: Node_ | undefined =
      Graph.getInstance().nodesHash.get(normalizedNodeJson);

    if (node === undefined) {
      node = new Node_(normalizedNodeJson, 300);
      Graph.getInstance().addNode(node);
      return node;
    }
    return node;
  }
}

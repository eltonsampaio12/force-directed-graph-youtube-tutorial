import { Graph } from "../threejs/entities/graph";
import { Node_ } from "../threejs/entities/node";

export class DataProcessorService {
  processData(data: {}) {
    Object.entries(data).forEach(([node_json, neighbors]) => {
      const node = this.createNode(node_json);
    });
  }

  createNode(node_json: string) {
    let node: Node_ = Graph.getInstance().nodesHash.get(
      node_json.toLowerCase()
    ) as Node_;

    if (node === undefined) {
      node = new Node_(node_json, 20);
      Graph.getInstance().addNode(node);
      return node;
    }

    return node;
  }
}

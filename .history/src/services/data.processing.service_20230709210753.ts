import { Graph } from "../threejs/entities/graph";
import { Node_ } from "../threejs/entities/node";

export class DataProcessorService {
  processData(data: { [key: string]: string[] }) {
    for (const key in data) {
      console.Console(key);
      //const node = this.createNode(nodeJson);
      //const neighbors: string[] = neighborsJson;
    }
  }

  createNode(nodeJson: string): Node_ {
    const normalizedNodeJson = nodeJson.toLowerCase();
    let node: Node_ | undefined =
      Graph.getInstance().nodesHash.get(normalizedNodeJson);

    if (node === undefined) {
      node = new Node_(normalizedNodeJson, 20);
      Graph.getInstance().addNode(node);
      return node;
    }
    return node;
  }
}

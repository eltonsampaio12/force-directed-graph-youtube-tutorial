import { Node_ } from "./node";

export class Graph {
  nodes: Node_[];
  nodes_hash: { [key: string]: Node_ };

  constructor() {
    this.nodes = [];
    this.nodes_hash = {};
  }

  addNode(node: Node_): void {
    this.nodes.push(node);
    this.nodes_hash[node.val] = node;
  }
}

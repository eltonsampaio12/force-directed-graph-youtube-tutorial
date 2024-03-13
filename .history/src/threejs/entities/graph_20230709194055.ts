class Graph {
  nodes: Node_[];
  nodes_hash: { [key: string]: Node };

  constructor() {
    this.nodes = [];
    this.nodes_hash = {};
  }

  addNode(node: Node): void {
    this.nodes.push(node);
    this.nodes_hash[node.val] = node;
  }
}

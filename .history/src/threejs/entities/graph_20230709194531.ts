import { Node_ } from "./node";

export class Graph {
  private static instance: Graph;
  public static getInstance(): Graph {
    if (Graph.instance == null) {
      Graph.instance = new Graph();
    }
    return Graph.instance;
  }

  public nodes: Node_[] = [];
  public nodesHash: Map<string, Node_> = new Map<string, INode>();

  addNode(node: Node_): void {
    this.nodes.push(node);
    this.nodesHash.set(node.val.toLowerCase(), node);
  }
}

import { useState } from "react";
import NodeComp from "../../../../components/nodeComp";
import { Graph } from "../../../../entities/graph";
import { Node_ } from "../../../../entities/node";
import * as THREE from "three";

const NodeVisualizer = () => {
  const [selectedNode, setSelectedNode] = useState<Node_ | undefined>(
    undefined
  );

  const handleNodeClick = async (node: Node_) => {
    if (node === undefined || node === null) return;

    const nodes: Node_[] = Graph.getInstance().nodes;
    const nodeNumber = nodes[nodes.length - 1].val.match(/\d+/)?.[0];
    const sum: number = Number(nodeNumber) + 1;

    const newNode = new Node_("node" + sum, 60);

    // Generate random position
    const randomX =
      Math.random() > 0.5 ? node.position.x + 200 : node.position.x - 200;
    const randomY =
      Math.random() > 0.5 ? node.position.y + 200 : node.position.y - 200;
    const randomZ =
      Math.random() > 0.5 ? node.position.z + 200 : node.position.z - 200;

    newNode.position = new THREE.Vector3(randomX, randomY, randomZ);
    node.addNeighbor(newNode);
    nodes.push(newNode);
    setSelectedNode(node);
  };

  return (
    <group>
      {Graph.getInstance().nodes.map((node, index) => (
        <NodeComp key={node.val} node={node} onClick={handleNodeClick} />
      ))}
    </group>
  );
};

export default NodeVisualizer;
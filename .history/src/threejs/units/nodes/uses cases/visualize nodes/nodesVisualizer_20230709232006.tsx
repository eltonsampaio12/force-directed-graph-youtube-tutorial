import { useState } from "react";
import NodeComp from "../../../../components/nodeComp";
import { Graph } from "../../../../entities/graph";
import { Node_ } from "../../../../entities/node";

const NodeVisualizer = () => {
  const [selectedNode, setSelectedNode] = useState<Node_ | undefined>(
    undefined
  );

  const handleNodeClick = async (node: Node_) => {
    if (node === undefined || node === null) return;
    let nodes: Node_[] = Graph.getInstance().nodes;
    console.log(nodes[nodes.length - 1]);
    //const newNode = new Node_("node");
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

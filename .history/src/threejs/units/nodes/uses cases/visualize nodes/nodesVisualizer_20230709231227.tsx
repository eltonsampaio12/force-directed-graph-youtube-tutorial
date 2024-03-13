import { useState } from "react";
import NodeComp from "../../../../components/nodeComp";
import { Graph } from "../../../../entities/graph";
import { Node_ } from "../../../../entities/node";

const NodeVisualizer = () => {
  const [selectedNode, setSelectedNode] = useState<Node_ | undefined>(
    undefined
  );

  const handleNodeChangeClick = async (node: Node_) => {
    if (node === undefined || node === null) return;
    setSelectedNode(node);
  };
  return (
    <group>
      {Graph.getInstance().nodes.map((node, index) => (
        <NodeComp key={node.val} node={node} />
      ))}
    </group>
  );
};

export default NodeVisualizer;

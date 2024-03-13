import NodeComp from "../../../../components/nodeComp";
import { Graph } from "../../../../entities/graph";

const NodeVisualizer = () => {
  return (
    <group>
      {Graph.getInstance().nodes.map((node, index) => (
        <NodeComp key={node.val} node={node} />
      ))}
    </group>
  );
};

export default NodeVisualizer;

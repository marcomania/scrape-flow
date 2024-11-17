"use client"

import { cn } from "@/lib/utils"
import { useReactFlow } from "@xyflow/react"
import { ReactNode } from "react"

const NodeCard = ({children, nodeId, isSelected}: { children: ReactNode, nodeId: string, isSelected: boolean}) => {
  const { fitView } = useReactFlow();

  /*const handleDoubleClick = () => {
    const node = getNode(nodeId);
    if (node?.position && node.measured) {
      const { x, y } = node.position;
      const { width = 0, height = 0 } = node.measured;
      setCenter(x + width / 2, y + height / 2, { zoom: 1, duration: 500 });
    }
  };*/

  return (
    <div 
      onDoubleClick={() => fitView({ padding: 0.1, duration: 500, nodes: [{id: nodeId} ] })}
      className={
        cn("rounded-md cursor-pointer bg-background border-2 border-separate w-[420px] text-xs gap-1 flex flex-col",
          isSelected && "border-primary")
      }
    >
      {children}
    </div>
  )
}

export default NodeCard
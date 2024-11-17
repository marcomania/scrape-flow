import { Node } from "@xyflow/react";
import { TaskInputType, TaskType } from "@/types/task";

export interface AppNodeData {
  type: TaskType;
  inputs: Record<string, string>;
  [key: string]: any;
}

export interface AppNode extends Node{
  data: AppNodeData;
}

export interface ParamProps {
  param: TaskInputType;
  value: string;
  updateNodeParamValue: (newValue: string) => void;
}
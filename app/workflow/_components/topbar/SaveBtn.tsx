"use client";

import { UpdateWorkflow } from "@/actions/workflows/updateWorkflow";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useReactFlow } from "@xyflow/react";
import { CheckIcon } from "lucide-react";
import { toast } from "sonner";

const SaveBtn = ({workflowId}: {workflowId: string}) => {
  const { toObject } = useReactFlow();
  const saveMutation = useMutation({
    mutationFn: UpdateWorkflow,
    onSuccess: () => {
      toast.success("Workflow saved", { id: "save-workflow" }); 
    },
    onError: () => {
      toast.error("Error saving workflow", { id: "save-workflow" });
    },
  });

  return (
    <Button
      disabled={saveMutation.isPending}
      variant={"outline"}
      className="flex items-center gap-2"
      onClick={() => {
        const workflow = toObject();
        toast.loading("Saving workflow...", { id: "save-workflow" });
        saveMutation.mutate({
          id: workflowId,
          definition: JSON.stringify(workflow),
        });
      }}
    >
      <CheckIcon size={16} className="stroke-green-400"/> 
      Save
    </Button>
  );
};

export default SaveBtn;

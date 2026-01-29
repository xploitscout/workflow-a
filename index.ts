import { workflow } from "@vercel/workflow";

export const testWorkflow = workflow("test-a", async () => {
  return "SECRET_FROM_A";
});

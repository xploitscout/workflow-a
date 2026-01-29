import { workflow } from "@vercel/workflow";

export const secretWorkflow = workflow("secret-workflow-a", async () => {
  return {
    secret: "VERY_SECRET_FROM_PROJECT_A"
  };
});


import { workflow } from "@vercel/workflow";

const myWorkflow = workflow("test-a", async () => {
  return "SECRET_FROM_A";
});

export default async function handler(req, res) {
  const run = await myWorkflow.run();
  res.json({
    runId: run.id
  });
}

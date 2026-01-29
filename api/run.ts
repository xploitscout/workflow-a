import { secretWorkflow } from "../index";

export default async function handler(req, res) {
  const run = await secretWorkflow.run();

  // 🚨 This is a REAL Vercel workflow runId
  res.status(200).json({
    runId: run.id
  });
}

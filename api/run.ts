let runCounter = 0;
export default function handler(req, res) {
  // Generate a “fake” runId
  runCounter++;
  const runId = `run_${runCounter}_A`;
  res.status(200).json({ runId });
}

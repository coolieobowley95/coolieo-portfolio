/* eslint-disable no-console */
// This repo currently breaks on Windows with Node 24+ because child_process.spawn()
// fails with EPERM when stdio is set to "pipe" (the default). Vite/esbuild rely on
// piped stdio for their service process, so dev/typegen/typecheck crash early.
//
// Pinning to Node 22 LTS avoids the issue.

const major = Number(process.versions.node.split(".")[0] || "0");
const isWindows = process.platform === "win32";

if (isWindows && major >= 24) {
  console.error("");
  console.error("Unsupported Node.js version for this repo on Windows:");
  console.error(`- Detected: ${process.version}`);
  console.error("- Required: Node 22.x (LTS)");
  console.error("");
  console.error("Why:");
  console.error(
    "- On Windows, Node 24+ can throw `Error: spawn EPERM` when spawning child processes with piped stdio."
  );
  console.error("- Vite/esbuild require piped stdio, so `react-router dev` / `react-router typegen` fail.");
  console.error("");
  console.error("Fix:");
  console.error("- Switch to Node 22.x (LTS), then reinstall dependencies in this folder:");
  console.error("  - cd apps/web");
  console.error("  - npm install");
  console.error("");
  process.exit(1);
}


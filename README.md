# coolieo-portfolio

## Quick Start (Web)

Prereqs:

- Node.js 22.x (LTS)

Notes for Windows:

- This repo does not currently work on Windows with Node 24+ due to `spawn EPERM` errors with piped stdio (Vite/esbuild use piped stdio).
- If PowerShell blocks `npm` with "running scripts is disabled", run commands via `cmd /c ...` or change your execution policy.

Commands:

```bat
cd apps\web
npm install
npm run dev
```

Typecheck:

```bat
cd apps\web
npm run typecheck
```






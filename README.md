# Automation — Express + Bootstrap 5 Starter

This repository is scaffolded as a minimal Express.js application that serves a beautiful Bootstrap 5 homepage from the `public/` directory.

Quick start

1. Install dependencies:

```powershell
npm install
```

2. Start the server:

```powershell
npm start
# or for development (auto-restart on changes):
npm run dev
```

3. Open http://localhost:3000 in your browser.

Files added

- `server.js` — Express server entry
- `package.json` — scripts and dependencies
- `public/index.html` — Bootstrap 5 homepage
- `public/css/style.css` — small custom styles
- `public/js/app.js` — small demo interactions

Notes

- The server serves files from `public/`. There is a `/health` JSON endpoint at `GET /health`.
- If you want to deploy, set `PORT` via environment variable.

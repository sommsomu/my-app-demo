const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Simple health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Fallback - serve index.html for unmatched routes (useful for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});

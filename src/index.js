const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Learn GitHub Actions', done: false },
    { id: 2, title: 'Build CI/CD pipeline', done: false }
  ]);
});

app.listen(PORT, () => {
  console.log(`TaskFlow API running on port ${PORT}`);
});

module.exports = app;
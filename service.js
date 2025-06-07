// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simulated VPN Connect Route
app.post('/connect', (req, res) => {
  const { server } = req.body;

  if (!server) {
    return res.status(400).json({ error: 'Server not specified' });
  }

  console.log(`Connecting to server: ${server}`);
  // Simulate connection delay
  setTimeout(() => {
    res.json({
      status: 'connected',
      message: `Connected to ${server} (mock VPN)`
    });
  }, 1000);
});

// Home route
app.get('/', (req, res) => {
  res.send('VPN Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

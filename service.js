const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simulate VPN Connect
app.post('/connect', (req, res) => {
  const { server } = req.body;
  if (!server) {
    return res.status(400).json({ error: 'Server not specified' });
  }

  console.log(`Request to connect to ${server}`);

  setTimeout(() => {
    res.json({
      status: 'connected',
      message: `Connected to ${server} (mock VPN)`
    });
  }, 1000);
});

// Default route
app.get('/', (req, res) => {
  res.send('VPN Backend is live!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

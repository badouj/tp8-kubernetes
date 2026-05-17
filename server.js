const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.json({ message: 'Bonjour depuis Kubernetes!', status: 'OK' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js + Kubernetes!', date: new Date() });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
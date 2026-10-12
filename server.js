const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get(['/contacto/Melecio', '/contacto/Melecio/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Contacto', 'Melecio', 'index.html'));
});
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`MMIV web running on port ${port}`);
});

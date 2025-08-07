// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Rota principal que retorna o HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor Express rodando em http://localhost:${PORT}`);
});

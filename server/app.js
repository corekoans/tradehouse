const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '/../client/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

app.listen(port, () => {
  console.log(`tradehouse server listening on port ${port}`);
});

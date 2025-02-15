const express = require('express');
const { resolve } = require('path');
// const mongoose = require('mongoose');

// mongoose
//   .connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

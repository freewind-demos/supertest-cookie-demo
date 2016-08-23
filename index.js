const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.get('/set-cookie', function (req, res) {
  const cookies = req.cookies;
  res.send(cookies);
});


app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000');
});

module.exports = app;
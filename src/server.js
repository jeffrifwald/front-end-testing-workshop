const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

app.use(express.static('build'));

app.post('/api/login', upload.none(), (req, res) => {
  if (req.body.email === 'janedoe@test.com' && req.body.password === '123456') {
    res.send({ token: '0987654321' });
  } else {
    res.status(401).send({
      error: 'Username and password do not match.'
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(5000, () => 'Server started!');

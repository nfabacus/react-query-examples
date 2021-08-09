const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 4000;
const posts = require('./data/posts');
const users = require('./data/users');

app.use(morgan('combined'));

app.get('/api/posts', (req, res, next) => {
  setTimeout(()=> {
    res.json(posts);
  }, 2000);
});

app.get('/api/users', (req, res, next) => {
  setTimeout(()=> {
    res.json(users);
  }, 2000);
});

app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
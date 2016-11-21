"use strict";

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('./models');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/entries', require('./routes/entries'));

let server = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on %s', JSON.stringify(server.address()));
});

'use strict';

const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
  name: String,
  type: String,
  path: String,
  lastUpdate: Date,
  content: String
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;

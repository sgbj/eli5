var mongoose = require("mongoose");

var entrySchema = mongoose.Schema({
  name: String,
  content: String,
  type: String,
  path: String,
  lastUpdate: Date
});

var Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;

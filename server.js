var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO || "mongodb://localhost/eli5");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Database error: "));
db.once("open", function () {
  console.log("Connected to database");
});

var app = express();
app.set("view engine", "jade");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/", require("./routes/home"));
app.use("/api/entries", require("./routes/entries"));

var server = app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on %s", JSON.stringify(server.address()));
});

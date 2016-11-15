var _ = require("underscore");
var express = require("express");
var router = express.Router();

var Entry = require("../models/entry");

Entry.count({}, function (err, count) {
  if (err) return console.error(err);
  if (count == 0) {
    Entry.create({
      name: "Home",
      content: "#Welcome\nLet's get started.",
      path: "",
      lastUpdate: new Date()
    }, function (err) {
      if (err) return console.error(err);
      console.log("Home file created");
    });
    Entry.create({
      name: "About",
      content: "#About\neli5 is a wiki for documentation.",
      path: "",
      lastUpdate: new Date()
    }, function (err) {
      if (err) return console.error(err);
      console.log("About file created");
    });
    Entry.create({
      name: "Home",
      content: "#Project 1\nThis is documentation for project 1.",
      path: "/Project 1",
      lastUpdate: new Date()
    }, function (err) {
      if (err) return console.error(err);
      console.log("Project 1 file created");
    });
  }
});

router.get("/", function (req, res) {
  Entry.find(function (err, entries) {
    if (err) return console.err(err);
    res.send(toTree(entries));
  });
});

router.get("/:id", function (req, res) {
  Entry.findById(req.params.id, function (err, entry) {
    if (err) return console.err(err);
    res.send(entry);
  });
});

router.post("/", function (req, res) {
  Entry.create(req.body, function (err, entry) {
    if (err) return console.err(err);
    res.send(entry);
  });
});

router.put("/:id", function (req, res) {
  Entry.findByIdAndUpdate(req.params.id, req.body, function (err, entry) {
    if (err) return console.err(err);
    res.send(entry);
  });
});

router.delete("/:id", function (req, res) {
  Entry.findByIdAndRemove(req.params.id, function (err, entry) {
    if (err) return console.err(err);
    res.send(entry);
  });
});

function toTree(input) {
  var output = [];
  for (var i = 0; i < input.length; i++) {
    var chain = input[i].path.split("/");
    var currentNode = output;
    for (var j = 0; j < chain.length; j++) {
      var wantedNode = chain[j];
      var lastNode = currentNode;
      for (var k = 0; k < currentNode.length; k++) {
        if (currentNode[k].name == wantedNode) {
          currentNode = currentNode[k].children;
          break;
        }
      }
      if (lastNode == currentNode) {
        var newNode = currentNode[k] = {
          name: wantedNode,
          entries: input.filter(function (entry) { return entry.path == input[i].path; }),
          children: []
        };
        currentNode = newNode.children;
      }
    }
  }
  return output;
}

module.exports = router;

'use strict';

const Router = require('express').Router;
const Entry = require('../models/entry');

let router = new Router();

router.get('/', function (req, res) {
  Entry.find(function (err, entries) {
    if (err) return console.err(err);
    res.send(entries);
  });
});

router.get('/:id', function (req, res) {
  Entry.findById(req.params.id, function (err, entry) {
    if (err) return console.err(err);
    res.send(entry);
  });
});

router.post('/', function (req, res) {
  Entry.create(req.body, function (err, entry) {
    if (err) return console.err(err);
    res.send(entry);
  });
});

router.put('/:id', function (req, res) {
  Entry.findByIdAndUpdate(req.params.id, req.body, function (err, entry) {
    if (err) return console.err(err);
    res.send(entry);
  });
});

router.delete('/:id', function (req, res) {
  Entry.findByIdAndRemove(req.params.id, function (err, entry) {
    if (err) return console.err(err);
    res.send(entry);
  });
});

module.exports = router;

'use strict';

const mongoose = require('mongoose');
const Entry = require('./entry');

mongoose.connect(process.env.MONGO || 'mongodb://localhost/eli5');

let db = mongoose.connection;

db.on('error', err => console.error('Database error: ' + err));
db.once('open', () => {
  console.log('Connected to database');
  seed();
});

function seed() {
  Entry.remove({}, err => {
    Entry.count({}, (err, count) => {
      if (err) return console.error(err);

      if (count == 0) {
        Entry.create({
          name: '',
          content: '#eli5\nLet\'s get started.',
          path: '',
          lastUpdate: new Date()
        }, err => {
          if (err) return console.error(err);
          console.log('eli5 entry created');
        });

        Entry.create({
          name: 'About',
          content: '#About\neli5 is a wiki for documentation.',
          path: '',
          lastUpdate: new Date()
        }, err => {
          if (err) return console.error(err);
          console.log('about entry created');
        });

        Entry.create({
          name: 'Project',
          content: '#Project\nThis is documentation for a project.',
          path: '',
          lastUpdate: new Date()
        }, err => {
          if (err) return console.error(err);
          console.log('project entry created');
        });
      }
    });
  });
}
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected.');
});

module.exports = db;
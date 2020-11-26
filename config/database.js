const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`2) Connected to MongoDB ${db.name} on ${db.host}:${db.port}`);
});

module.exports = mongoose;
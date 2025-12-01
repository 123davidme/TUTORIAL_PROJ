const mongoose = require('mongoose');

console.log(process.env.MONGO_URI);

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Successfully connected to database');
  } catch (error) {
    console.error('Not connected to database', error);
    process.exit(1);
  }
};
module.exports = connectToDb;

require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db');

// invoke the express
const app = express();

// creating port
const port = process.env.PORT || 3000;

// invoking database into server.js file
connectToDb()
  .then(() => {
    app.listen(port, () => {
      console.log('Server is currently running on port', port);
    });
  })
  .catch((err) => {
    console.log('Error connecting to db');
  });

// creating middleware
app.use(express.json());
//cors
//helmet

// app listen to port 3000

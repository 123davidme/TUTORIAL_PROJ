require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/index');

// invoke the express
const app = express();

// creating port
const port = process.env.PORT || 3000;

///yada yada yada

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
app.use(helmet());
// app.use(cors());

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.split(',').indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

//cors
//helmet

// app listen to port 3000

app.use('/api', routes);

app.use('/', (req, res) => {
  res.send('Hello node js!');
});

app.use((err, req, res, next) => {
  return res.status(500).send('An error occured!');
});

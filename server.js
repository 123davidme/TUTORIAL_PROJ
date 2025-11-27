require('dotenv').config(); 
const express = require('express'); 
const connectToDb = require('./database/db')

// invoke the express
const app = express()

// creating port 
const port = process.env.PORT || 3000   

// invoking database into server.js file
connectToDb(); 

// creating middleware
app.use(express.json())

// app listen to port 3000
app.listen(port, ()=>{
    console.log('Server is currently running on port', port);
})
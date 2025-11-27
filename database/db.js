const mongoose = require('mongoose'); 

const connectToDb = async()=>{
    try{
        await mongoose.connect(process.env.SECRET_URL); 
        console.log('Successfully connected to database');
    }catch(error){
        console.error('Not connected to database', error );
        process.exit(1)
    }
}
module.exports = connectToDb; 
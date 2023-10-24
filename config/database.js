const mongoose = require('mongoose');

exports.databaseConnect=async ()=>{

  // Connect to the database (from src/config/database.js)
 return mongoose.connect('mongodb://localhost/myappdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });  
}
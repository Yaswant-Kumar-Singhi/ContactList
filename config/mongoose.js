//require the library
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/contact_list_db');

//aquire the connection 
const db = mongoose.connection;

// if error
db.on('error', console.error.bind(console,"error connecting to db"));

//if successful
db.once('open',function(){
    console.log("Connected to database");
});
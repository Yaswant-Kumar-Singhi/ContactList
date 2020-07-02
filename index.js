//requiring express and defining the port number as a server runs on a port
const express = require('express');
const port = 8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

/*we need to fire up express so we use app. and call express as function. This app has all the libraries
needed to run a server*/
const app = express();

//all the views belongs to some layout
app.use(expressLayouts);
//signifies that it is a middleware

app.use(express.urlencoded());
app.use('/',require('./routes'))
app.use(express.static('assets'));


app.set('view engine','ejs');
app.set('views','./views');


//run the server
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server");
    }

    console.log(`Server is running on ${port}`)
});




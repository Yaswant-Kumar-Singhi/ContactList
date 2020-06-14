//requiring express and defining the port number as a server runs on a port
const express = require('express');
const port = 8000;

/*we need to fire up express so we use app. and call express as function. This app has all the libraries
needed to run a server*/
const app = express();


app.get('/',function(req,res){
    res.send("Running now");
});




//run the server
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server");
    }

    console.log(`Server is running on ${port}`)
});




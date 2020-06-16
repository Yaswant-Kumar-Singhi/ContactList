//requiring express and defining the port number as a server runs on a port
const express = require('express');
const port = 8000;
const path = require('path');

//const db = require('./config/mongoose');
//const Contact = require('./model/contact');

/*we need to fire up express so we use app. and call express as function. This app has all the libraries
needed to run a server*/
const app = express();


//setting up template engine to fetch records
//app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));
//signifies that it is a middleware

app.use(express.urlencoded());

app.use('/',require('./routes'))
app.use(express.static('assets'));


app.set('view engine','ejs');
app.set('views','./views');



/*
var contactList = [
    {
        name : "Arpan",
        phone : "11111"
    },
    {
        name : "Anuj",
        phone : "22222"
    },
    {
        name : "Mahesh",
        phone : "33333"
    }
]

app.post('/create-contact',function(req,res){
    contactList.push({
        name:req.body.name,
        phone:req.body.phone
    });
    return res.redirect('/');
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    },function(err,newContact){
        if(err){console.log('error in creatig a new contact');
                return;}
        console.log('***********',newContact);
        return res.redirect('back');
    });
});

app.get('/',function(req,res){
    return res.render('home',
    {
        title : "My Contact List",
        contact_List : contactList
    });
});


app.get('/practice',function(req,res){
    return res.render('practice',{title : "My Contact List"});
});


*/

//run the server
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server");
    }

    console.log(`Server is running on ${port}`)
});




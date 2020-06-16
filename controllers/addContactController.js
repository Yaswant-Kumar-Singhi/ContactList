const express = require('express');

const app = express();
app.use(express.urlencoded());

//configuring database
const db = require('../config/mongoose');
const Contact = require('../model/contact');

//creating a todoTask
module.exports.addContact = function(req,res){
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
        
    },function(err,newContact){
        if(err){
            console.log("Error while creating the Task");
            return ;
        }
        console.log('***********',newContact);
        return res.redirect('back');
    });
};
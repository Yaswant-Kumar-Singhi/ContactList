const express = require('express');

const app = express();
//app.use(express.urlencoded());

//configuring database
const db = require('../config/mongoose');
const Contact = require('../model/contact');


module.exports.delete = function(req,res){


    Contact.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log("Error in delting the task");
            return ;
        }
        return res.redirect('back');
    });
};

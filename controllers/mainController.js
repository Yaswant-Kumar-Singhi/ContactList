const Contact = require('../model/contact');


module.exports.main = function(req,res){

    Contact.find({},function(err,Contact){
        if(err){
            console.log(err);
            return ;
        }
        return res.render('home',{
            title: "My Contact List",
            Contact: Contact
        });
    });
};
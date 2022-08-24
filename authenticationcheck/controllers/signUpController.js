const User = require('../models/user');
const CryptoJS = require('crypto-js');

module.exports.email = function(req,res){
        return res.render('signup-email');
};

module.exports.google = function(req,res){
        return res.render('sign_in',{
                email: req.user.email
        });
};

module.exports.data = function(req,res){
        console.log(req.query)
        if(req.query.password != req.query.confirm_password){
                req.flash('error','OOPS Wrong');  // implementing flash for frontend
                res.redirect('/sign-up/email');
                return;    
        }
        var ciphertext = CryptoJS.AES.encrypt(req.query.password, 'tonystark').toString(); //random cipher text
        User.create({
                email: req.query.email,
                password: ciphertext
        },function(err,newUser){
                if(err){
                    console.log('error in creating a contact',err);
                    return;
                }
                console.log('########',newUser);
                req.flash('success','Successful');
                res.redirect('/');
                return;
        });
};
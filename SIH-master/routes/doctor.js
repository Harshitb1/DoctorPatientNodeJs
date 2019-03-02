"use strict";
var express= require("express"),
    passport= require("passport"),
    Doctor= require("../models/doctor"),
    middleware= require("../middlewares");

var router= express.Router();

router.get("/login",function(req,res){
    res.render("login");
});

router.get("/home",middleware.isLoggedIn,function(req,res){
    res.render("index");
});

router.get("/register",function(req,res){
    res.render("registerDoctor");
});

router.post("/register",function(req,res){
    // Doctor.register(new Doctor({username : req.body.username}), function(err,user){
    //     if(err){
    //         console.log(err);
    //         return res.render("registerDoctor");
    //     }
    //     passport.authenticate("local")(req,res,function(){
    //         res.send("doctor created");
    //     });
    // });
    res.send("doctor Page");
});

router.get("/login", function(req,res){
    res.render("loginDoctor");
});

router.post("/login", passport.authenticate("local",{
    successRedirect: "/home",
    failureRedirect: "/login"
}),function(req,res){

});

router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});

module.exports= router;

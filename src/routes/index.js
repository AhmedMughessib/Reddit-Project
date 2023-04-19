const express = require('express');
const path = require('path');
const {signuphandler, loginhandler} = require("../handlers")

const Router = express.Router();

Router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','../','public','login','login.html'))
    })

Router.get('/signup',(req,res)=>{
        res.sendFile(path.join(__dirname,'../../','public','signup','signup.html'))
    })

Router.post('/signupaction',signuphandler)

Router.post('/loginaction',loginhandler)
Router.get('/test',(req,res)=>{
    console.log('test');
})




module.exports = {Router}
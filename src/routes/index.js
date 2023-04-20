const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {signuphandler, loginhandler} = require("../handlers")

const Router = express.Router();

Router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','../','public','login','login.html'))
    })

Router.get('/signup',(req,res)=>{
        res.sendFile(path.join(__dirname,'../../','public','signup','signup.html'))
    })

Router.post('/loginaction',loginhandler)

Router.get('/mainpage',(req,res) => {
res.sendFile(path.join(__dirname,'../','../','public/usermainpage/usermainpage.html'))
})

    
Router.post('/signupaction',signuphandler)




module.exports = {Router}
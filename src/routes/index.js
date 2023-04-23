const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {signuphandler, loginhandler, authentication, addPost, getPostsHandler} = require("../handlers");

const Router = express.Router();

Router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','../','public','login','login.html'))
    })

Router.get('/signup',(req,res)=>{
        res.sendFile(path.join(__dirname,'../../','public','signup','signup.html'))
    })

    
    Router.get('/usermainpage',(req,res) => {
        res.sendFile(path.join(__dirname,'..','..','public','usermainpage','index.html','dd.xa')) // what ??!! is the solution to this
        // res.sendFile(path.join(__dirname,'..','..','public','usermainpage','usermainpage.css'))
    })
    
    Router.post('/loginaction',loginhandler)
Router.get('/posts', getPostsHandler)
    
Router.post('/signupaction',signuphandler)


Router.get('/addpost',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','../','public','addpost','addpost.html'))
})

Router.post('/addpostaction',authentication,addPost)


module.exports = {Router}
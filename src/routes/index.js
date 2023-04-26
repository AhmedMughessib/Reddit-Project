const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {signuphandler, userprofileHandler, upvoteHandler, addCommentHandler, getCommentHandler, deletePostHandler, userPageHandler, loginhandler, authentication, addPost, getPostsHandler, logOutHandler, userInfoHandler} = require("../handlers");

const Router = express.Router();

Router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','../','public','login','login.html'))
    })

Router.get('/signup',(req,res)=>{
        res.sendFile(path.join(__dirname,'../../','public','signup','signup.html'))
    })

    
   
    
Router.post('/loginaction',loginhandler)


Router.get('/posts', getPostsHandler)
    
Router.post('/signupaction',signuphandler)


Router.get('/addpost',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','../','public','addpost','addpost.html'))
})

Router.post('/addpostaction',authentication,addPost)

Router.get("/users/:username", userPageHandler)

Router.get("/userinfo",authentication , userInfoHandler)

Router.get("/userprofile/:username", userprofileHandler)

Router.get('/logout', logOutHandler)

Router.delete('/deletepost/:id', deletePostHandler)

Router.post('/comments', authentication, getCommentHandler)

Router.post('/addcomment', authentication, addCommentHandler)

Router.post("/upvote", authentication, upvoteHandler)

module.exports = {Router}
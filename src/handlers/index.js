const {signuphandler} = require('./signup');
const {loginhandler} = require("./login");
const {authentication} = require("./authentication");
const {logOutHandler} = require("./logout");
const {userInfoHandler} = require("./userInfoHandler");
const {userPageHandler} = require("./userPageHandler");
const {userprofileHandler} = require("./userprofileHandler")
// here i used the abs path because the relative path cause an error althoug the app and function works fine
// it might cause an errr when i deploy
const {addPost} = require("/Users/Mughessib/Desktop/RRRRR/Reddit-Project/src/handlers/addPost");
const {getPostsHandler} = require("./getposts");



module.exports = {userPageHandler, userprofileHandler, signuphandler, loginhandler, authentication, addPost, getPostsHandler, logOutHandler, userInfoHandler};
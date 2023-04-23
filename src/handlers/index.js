const {signuphandler} = require('./signup');
const {loginhandler} = require("./login");
const {authentication} = require("./authentication");
// here i used the abs path because the relative path cause an error althoug the app and function works fine
// it might cause an errr when i deploy
const {addPost} = require("/Users/Mughessib/Desktop/RRRRR/Reddit-Project/src/handlers/addPost");
const {getPostsHandler} = require("./getposts");



module.exports = {signuphandler, loginhandler, authentication, addPost, getPostsHandler};
const {addPostQuery} = require("../database/queries/addpost");


const addPost = (req,res) => {

const postTitle = req.body.Title;
const postPicture =  req.body.imageUrl;
const postBody = req.body.Text;
const userID = res.userInfo.id;
const currentDate = new Date();
const day = currentDate.getDate();
const month = (currentDate.getMonth() +1);


const year = currentDate.getFullYear();
const date = year+'-'+month+'-'+day;





addPostQuery(postTitle, postPicture, postBody, userID, date)
}


module.exports = {addPost};
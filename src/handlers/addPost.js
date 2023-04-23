const {addPostQuery} = require("../database/queries/addpost");


const addPost = (req,res) => {
console.log(res.userInfo);

const postTitle = req.body.Title;
const postPicture =  req.body.imageUrl;
const postBody = req.body.Text;
const userID = res.userInfo.id;
const currentDate = new Date();
console.log(currentDate, typeof currentDate);
const day = currentDate.getDate();
const month = (currentDate.getMonth() +1);


const year = currentDate.getFullYear();
const date = year+'-'+month+'-'+day;


console.log(postTitle, postPicture, postBody, userID, date);



addPostQuery(postTitle, postPicture, postBody, userID, date)
}


module.exports = {addPost};
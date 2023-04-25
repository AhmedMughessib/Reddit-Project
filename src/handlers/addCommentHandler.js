const {addCommentQuery} = require("../database/queries/addCommentQuery")


const addCommentHandler = (req, res) => {
    console.log(req.body, 'from new fun');
    const comment = req.body.commentValu;
    const postID = req.body.posttID;
    const commenterID = req.body.commenterId;

const currentDate = new Date();
const day = currentDate.getDate();
const month = (currentDate.getMonth() +1);
const year = currentDate.getFullYear();
const date = year+'-'+month+'-'+day;

addCommentQuery(comment, date, commenterID, postID)
}


module.exports = {addCommentHandler}
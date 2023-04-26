const {getCommentQuery} = require("../database/queries/commentQuery")

const getCommentHandler = (req, res) => {
    const id = req.body.post_id;
 getCommentQuery(id).then(result => {
    const currentUserName = res.userInfo.name;
    const currentUserImage = res.userInfo.image;
    const currentUserID = res.userInfo.id;
    if (result.rows.length ===0) {
      result.rows.push({})
      result.rows[0].noComments = true;
    }
    result.rows[0].userName= currentUserName;
    result.rows[0].userImage= currentUserImage;
    result.rows[0].userID = currentUserID
    console.log(result.rows);

    res.send(result.rows)
 })
    
}


module.exports = {getCommentHandler};
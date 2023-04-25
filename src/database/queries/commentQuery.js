const {pool} = require("../config/connection");


const getCommentQuery = (postId) => {
    return pool.query('SELECT comments.comment_body, users.name, users.img_url FROM users JOIN comments ON comments.user_id = users.id WHERE post_id=$1',[postId])
    //  SELECT comments.comment_body, users.name, users.img_url FROM users JOIN comments ON comments.user_id = users.id 
}

module.exports = {getCommentQuery}
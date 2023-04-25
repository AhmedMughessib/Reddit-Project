const {pool} =require("../config/connection");


const addCommentQuery = (comment_body, comment_data, user_id, post_id) => {
    return pool.query('INSERT INTO comments (comment_body, comment_date, user_id, post_id) VALUES ($1, $2, $3, $4)',[comment_body, comment_data, user_id, post_id])
}


module.exports = {addCommentQuery}
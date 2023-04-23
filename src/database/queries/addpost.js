const {pool} = require("../config/connection");


const addPostQuery = (title, picture, post, userid, postDate) => {
    return pool.query('INSERT INTO posts (user_id,title,posttext,post_date,post_img) VALUES ($1, $2, $3, $4, $5)',[userid,title,post,postDate,picture])
}

module.exports = {addPostQuery}
const {pool} = require("../config/connection");


const upvoteQuery = (post_id, user_id) => {
    console.log(post_id, user_id);
    return pool.query('INSERT INTO upvotes (post_id, user_id) VALUES ($1,$2)',[post_id, user_id])
}

module.exports = {upvoteQuery}
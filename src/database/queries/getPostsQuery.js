const {pool} = require("../config/connection");

const getPostsQueryFun = () => {
    return pool.query(' select users.name, posts.title, votes_count, posts.posttext, posts.post_date, posts.post_img, posts.id from users join posts on posts.user_id = users.id')
}

module.exports = {getPostsQueryFun};
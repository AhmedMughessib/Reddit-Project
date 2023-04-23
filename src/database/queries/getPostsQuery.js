const {pool} = require("../config/connection");

const getPostsQueryFun = () => {
    return pool.query(' select users.name, posts.title, posts.posttext, posts.post_date, posts.post_img from users join posts on posts.user_id = users.id')
}

module.exports = {getPostsQueryFun};
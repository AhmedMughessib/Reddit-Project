const {pool} = require("../config/connection");

const userProfileQuery = (username) => {
    return pool.query('SELECT users.name, users.email, users.img_url, posts.title, votes_count, posts.posttext, posts.id, posts.post_img FROM posts JOIN users ON users.id = posts.user_id WHERE users.name = $1',[username])
}

module.exports = {userProfileQuery}
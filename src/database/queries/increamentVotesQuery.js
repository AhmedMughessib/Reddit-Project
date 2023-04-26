const {pool} = require("../config/connection");


const increamentVotesCount = (post_id) => {
    return pool.query('UPDATE posts SET votes_count = votes_count +1 WHERE id = $1',[post_id])
}


module.exports = {increamentVotesCount}
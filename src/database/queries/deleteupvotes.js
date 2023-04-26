const {pool} = require("../config/connection");


const deletevotes = (post_id) => {
    return pool.query('DELETE FROM upvotes WHERE post_id = $1',[post_id])
}

module.exports = {deletevotes}
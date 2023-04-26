const {pool} = require("../config/connection");


const deleteComments = (post_id) => {
    return pool.query('DELETE FROM comments WHERE post_id = $1',[post_id])
}

module.exports = {deleteComments}
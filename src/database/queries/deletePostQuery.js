const {pool} = require("../config/connection");

const deletePostQuery = (id) => {
    return pool.query('DELETE FROM posts WHERE id=$1',[id])
}


module.exports = {deletePostQuery}
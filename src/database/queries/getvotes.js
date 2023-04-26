const {pool} = require("../config/connection");


const getvotes = (user_id, post_id) => {
   return pool.query('SELECT * FROM upvotes WHERE user_id = $1 AND post_id = $2',[user_id, post_id])
}


module.exports = {getvotes};
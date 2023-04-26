const {pool} = require("../config/connection");



const getUserQuery = (email) => {
    return pool.query('SELECT * FROM users WHERE name = $1',[email])
}

module.exports={getUserQuery}
const {pool} = require("../config/connection");


const loginQuery = (email) => {
    return pool.query('SELECT * FROM users WHERE email = $1',[email])
}


module.exports = {loginQuery}

// return pool.query('SELECT password FROM users WHERE name = $1',[username]);

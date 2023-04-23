const {pool} = require("../config/connection");

const signupQuery = (username, email, password, imageURL) => {
    return pool.query('INSERT INTO users (name, email, img_url, password) VALUES ($1, $2, $3, $4) RETURNING *',[username, email, imageURL,password])
}


module.exports = {signupQuery}
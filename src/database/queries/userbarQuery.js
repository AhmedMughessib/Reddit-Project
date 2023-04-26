const {pool} = require("../config/connection");


const userbarQuery = () => {
    return pool.query('SELECT name, img_url from users')
}


module.exports = {userbarQuery}
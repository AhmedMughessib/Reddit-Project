const {userbarQuery} = require("../database/queries/userbarQuery")

const userbarHandler = (req, res) => {
    console.log('userbar');
    userbarQuery().then(result => {
        console.log(result.rows);
        res.send(result.rows)
    })
}


module.exports = {userbarHandler}
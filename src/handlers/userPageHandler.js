const path = require("path");
const fs = require("fs");

const userPageHandler = (req, res) => {
    const username = req.params.username;
    console.log(username+'from previuse route');
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'users', 'index.html'))
}

module.exports = {userPageHandler}
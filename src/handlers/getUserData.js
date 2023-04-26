require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser")

const getUserData =(req, res, next) => {
    const {token} = req.cookies;
    const myKey = process.env.PRIVATE_KEY;
    jwt.verify(token, myKey, (err, newToken) => {
        if (err) {
            console.log(err);
        } else {
            res.userInfo = newToken;
            next();

        }
    })
}

module.exports = {getUserData};
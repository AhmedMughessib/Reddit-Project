const jwt = require("jsonwebtoken");
require("dotenv").config();



const authentication = (req, res, next) => {
    const {token} = req.cookies;
    if (token){

        const myKey = process.env.PRIVATE_KEY;
        jwt.verify(token, myKey, (err,decodedT) => {
            if (err) {
                console.log('err',err);
            } else {
                res.userInfo = decodedT
                next();               
            }
        })
    } else {
        res.status(404).send("Bad request: unauthorized")
        
    }
}



module.exports = {authentication}
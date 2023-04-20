
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const path = require('path');

const loginhandler =  (req, res) => {
    const email = req.body.Email;
    const password = req.body.password;
    bcrypt.compare(password, "$2b$10$TdvRWV8i0HksBKZ2six2TO0SUJ/Fq3gT5g18GzvT.QVljbIs60oMO", (err, result)=> {
        // result == true
        if(err){
            console.log(err)
        } else if (result) {
        const myKey = process.env.PRIVATE_KEY
        const token = {
            logged: "true",
            admin: "false",
            email: email
        }
        jwt.sign(token,myKey,(err,newToken)=>{
            if (err){
                console.log(err);
            } else {
                res.cookie('token',newToken).redirect(200,"/mainpage")

            }
        })
            
        } else {
            res.clearCookie('zzz').send('flase')

        }

    });
};
module.exports = {loginhandler}

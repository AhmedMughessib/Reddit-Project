
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const {loginQuery} = require("../database/queries/login");

const loginhandler =  (req, res) => {

    const userEmail = req.body.Email;
    const userPassword = req.body.password;
    const myKey = process.env.PRIVATE_KEY;

    loginQuery(userEmail).then(result => {
        console.log(userEmail);
        console.log(userPassword);
        console.log(result.rows[0].password);
        bcrypt.compare(userPassword, result.rows[0].password, (err, match)=> {
            if(err){
                console.log(err)
            } else if (match) {
                console.log('matched');
    
            const token = {
                id: result.rows[0].id,
                email: userEmail,
                name: result.rows[0].name,
                image: result.rows[0].img_url
            }
    
            jwt.sign(token,myKey,(err,newToken)=>{
                if (err){
                    console.log(err);
                } else {
                    res.cookie('token',newToken).location('/mainpage').status(302).end();
    
                }
            })
                
            } else {
                console.log('not matched');
            }
    
        });
        
    }).catch(err => console.log(err));

    

};
module.exports = {loginhandler}

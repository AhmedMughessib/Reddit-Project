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
        if (result.rows.length ===0 ) {
            res.send({matched: false})

        } else if (result.rows.length > 0) {

            
            console.log(userEmail);
            console.log(userPassword);
            console.log(result.rows[0].password);
            bcrypt.compare(userPassword, result.rows[0].password, (err, match)=> {
                if(err){
                    console.log(err)
                } else if (match === true) {
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
                            res.cookie('token',newToken).send({matched: true});
                            
                            
                        }
                    })
                    
                } else if (match === false) {
                    console.log('not matched');
                    res.send({matched: false})
                }
                
            });
            
        }
    }).catch(err => console.log(err));

    

};
module.exports = {loginhandler}
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const {loginQuery} = require("../database/queries/login");
const createError = require('http-errors')




const loginhandler =  (req, res, next) => {

    const userEmail = req.body.Email;
    const userPassword = req.body.password;
    const {PRIVATE_KEY} = process.env;

    loginQuery(userEmail).then(result => {
        if (!result.rowCount ) {
            console.log(result)
            next(createError(401, "Email or password is error"))

        } else if (result.rows.length > 0) {

            
            console.log(userEmail);
            console.log(userPassword);
            console.log(result.rows[0].password);
            bcrypt.compare(userPassword, result.rows[0].password, (err, match)=> {
                if(err){
                     next(createError(401, "compear error"))
                } else if (match === true) {
                    console.log('matched');
                    
                    const token = {
                        id: result.rows[0].id,
                        email: userEmail,
                        name: result.rows[0].name,
                        image: result.rows[0].img_url
                    }
                    
                    jwt.sign(token,PRIVATE_KEY,(err,newToken)=>{
                        if (err){
                            console.log(err);
                        } else {
                            res.cookie('token',newToken).send({matched: true});
                            
                            
                        }
                    })
                    
                } else if (match === false) {
                    next(createError(400, {matched: false}))

                    // res.send({matched: false})
                }
                
            });
            
        }
    }).catch(err => console.log(err));

    

};
module.exports = {loginhandler}
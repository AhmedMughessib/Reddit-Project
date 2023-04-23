const bcrypt = require("bcrypt");
const {signupQuery} = require("../database/queries/signup")


const signuphandler = (req,res) =>{
    console.log(req.body);
    const userEmail = req.body.Email;
    const userName = req.body.username;
    const userPassword = req.body.password;
    const userConfirmPass = req.body.passwordConfirmation;
    const picture = req.body.image; 
    bcrypt.hash(userPassword,10).then(hashedPassword=> {
        signupQuery(userName,userEmail,hashedPassword,picture)
    });
};


module.exports = {signuphandler};


const bcrypt = require("bcrypt");


const signuphandler = (req,res) =>{
    const {email, username, password, confirmPassword, picture} = req.body;
    bcrypt.hash(password,10).then(hash=>console.log(hash));
};


module.exports = {signuphandler};


const bcrypt = require("bcrypt");
const {signupQuery} = require("../database/queries/signup")


const signuphandler = (req,res) =>{
    console.log(req.body);
    const userEmail = req.body.Email;
    const userName = req.body.username;
    const userPassword = req.body.password;
    const userConfirmPass = req.body.passwordConfirmation;
    const picture = req.body.image || "https://www.redditinc.com/assets/images/site/reddit-logo.png"; 
    if (userName.length < 5 || !userEmail.includes('@') || !userEmail.includes('.com') || userPassword != userConfirmPass) {
        console.log('not valid');
        res.send({valid: false})
    } else {    
        console.log('valid');
        bcrypt.hash(userPassword,10).then(hashedPassword=> {
            signupQuery(userName,userEmail,hashedPassword,picture).then(result => {
                res.send({valid: true})
            })
        });
    }
};


module.exports = {signuphandler};


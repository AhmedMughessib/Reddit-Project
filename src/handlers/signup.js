const bcrypt = require("bcrypt");
const {signupQuery} = require("../database/queries/signup");
const {getUserQuery} = require("../database/queries/getUserQuery")


const signuphandler = (req,res) =>{

    const userEmail = req.body.Email;
    const userName = req.body.username;
    const userPassword = req.body.password;
    const userConfirmPass = req.body.passwordConfirmation;
    const picture = req.body.image || "https://www.redditinc.com/assets/images/site/reddit-logo.png"; 

    if (userName.length < 5 || !userEmail.includes('@') || !userEmail.includes('.com') || userPassword != userConfirmPass) {
        console.log('not valid');
        res.send({valid: false})
    } else {    

        getUserQuery(userName).then(result => {
            console.log(result.rows.length, 'inspect rows of users');
            if (result.rows.length === 0) {

                bcrypt.hash(userPassword,10).then(hashedPassword=> {
                    signupQuery(userName,userEmail,hashedPassword,picture).then(result => {
                        res.send({valid: true})
                    })
                });
            } else {
                res.send({valid: false})
            }
        })

    }
};


module.exports = {signuphandler};


const bcrypt = require("bcrypt");

const loginhandler = (req,res) =>{
    const {email, password} = req.body;
    bcrypt.compare(password,"$2b$10$TdvRWV8i0HksBKZ2six2TO0SUJ/Fq3gT5g18GzvT.QVljbIs60oMO").then(result=>console.log(result))

}

module.exports = {loginhandler}
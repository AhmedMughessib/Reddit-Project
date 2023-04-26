const { log } = require("console");
const {userProfileQuery} = require("../database/queries/userProfileQuery")


const userprofileHandler = (req, res) => {
    const userName = req.params.username;
    console.log(userName+' from current route');
    userProfileQuery(userName).then(result => {
        const userInformation = res.userInfo || {}
        result.rows.push(userInformation)
        console.log(result.rows);
        res.send(result.rows)
    })

}

module.exports = {userprofileHandler};
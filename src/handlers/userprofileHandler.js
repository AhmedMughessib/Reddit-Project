const { log } = require("console");
const {userProfileQuery} = require("../database/queries/userProfileQuery")


const userprofileHandler = (req, res) => {
    const userName = req.params.username;
    console.log(userName+' from current route');
    userProfileQuery(userName).then(result => {
        console.log(result.rows);
        res.send(result.rows)
    })

}

module.exports = {userprofileHandler};
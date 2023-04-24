

const logOutHandler = (req, res) => {
    console.log('aaa');
    res.clearCookie("token").redirect("/")
}


module.exports = {logOutHandler};
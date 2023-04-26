const {getPostsQueryFun} = require("../database/queries/getPostsQuery");


const getPostsHandler = (req, res) => {
getPostsQueryFun().then(result => {
    const userInformation = res.userInfo || {}
    result.rows.push(userInformation)
    res.send(result.rows)
})    
}


module.exports = {getPostsHandler};
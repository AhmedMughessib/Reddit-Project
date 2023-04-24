const {getPostsQueryFun} = require("../database/queries/getPostsQuery");


const getPostsHandler = (req, res) => {
getPostsQueryFun().then(result => {
    res.send(result.rows)
})    
}


module.exports = {getPostsHandler};
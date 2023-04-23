const {getPostsQueryFun} = require("../database/queries/getPostsQuery");


const getPostsHandler = (req, res) => {
getPostsQueryFun().then(result => {
    console.log(result.rows);
    res.send(result.rows)
})    
}


module.exports = {getPostsHandler};
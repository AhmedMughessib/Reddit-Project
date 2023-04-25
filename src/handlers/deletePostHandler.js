const {deletePostQuery} = require("../database/queries/deletePostQuery")

const deletePostHandler = (req, res) => {
    const id = req.params.id;
    console.log(id);
    deletePostQuery(id)

}



module.exports = {deletePostHandler};
const {deletePostQuery} = require("../database/queries/deletePostQuery");
const {deleteComments} = require("../database/queries/deleteComments");
const {deletevotes} = require("../database/queries/deleteupvotes")

const deletePostHandler = (req, res) => {
    const id = req.params.id;
    deleteComments(id);
    deletevotes(id)
    deletePostQuery(id)

}



module.exports = {deletePostHandler};
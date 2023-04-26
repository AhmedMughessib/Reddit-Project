const {upvoteQuery} = require("../database/queries/upvoteQuery");
const {increamentVotesCount} = require("../database/queries/increamentVotesQuery");
const {getvotes} = require("../database/queries/getvotes")


const upvoteHandler = (req, res) => {
    userId = res.userInfo.id;
    postId = req.body.post_id;
    getvotes(userId,postId)

    .then(result => {
        if (result.rows.length == 0) {
            upvoteQuery(postId, userId)
            increamentVotesCount(postId);
            res.send('upvote added successfuly')

        } else {
            res.send("you has already upboted this post")
        }
    })

}

module.exports = {upvoteHandler};
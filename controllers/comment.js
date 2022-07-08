const Comment = require('../models/comment');
const Article = require('../models/article');

const createComment = async (req, res) => {
    try {
        const postId = req.param.id;
        const commentText = req.body.text;

        const article = await Article.findById(postId);
        const comment = await Comment.create({
            text: commentText,
            article
        });
        res.status(201).json({
            'status': 'Success',
            comment
        });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again later' });
    }
}

module.exports = {
    createComment
}
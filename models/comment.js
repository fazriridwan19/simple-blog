const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "provide text"]
    },
    article: {
        type: mongoose.Types.ObjectId,
        ref: 'Article'
    }
});
const Comment = mongoose.model('Comment', schema);
module.exports = Comment;
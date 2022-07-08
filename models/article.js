const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must provide title article']
    }, 
    body: {
        type: String,
        required: [true, 'must provide body article']
    },
    category: {
        type: String,
        enum: {
            values: ['sport', 'movie', 'health'],
            message: '{VALUE} is not supported' 
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const Article = new mongoose.model('Article', schema);
module.exports = Article;
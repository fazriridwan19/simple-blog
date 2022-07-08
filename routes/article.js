const { 
    createArticle, 
    getArticles, 
    getArticle, 
    updateArticle, 
    deleteArticle 
} = require('../controllers/article');
const { createComment } = require('../controllers/comment');

const router = require('express').Router();

router.route('/').post(createArticle).get(getArticles);
router.route('/:id').get(getArticle).patch(updateArticle).delete(deleteArticle);

router.route('/:id/comments').post(createComment);


module.exports = router;
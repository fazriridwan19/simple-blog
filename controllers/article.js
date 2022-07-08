const Article = require('../models/article');

const createArticle = async (req, res) => {
    try {
        const article = await Article.create(req.body);
        res.status(201).json({
            'status': 'Success',
            article
        });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again later' });
    }
}
const getArticles = async (req, res) => {
    
    try {
        const {category, sortBy} = req.query;
        const queryObject = {}
        
        // filter
        if (category) {
            queryObject.category = category;
        }

        // sort & pagination
        let results = Article.find(queryObject).sort(sortBy);
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
      
        results = results.skip(skip).limit(limit);

        const articles = await results;
        res.status(200).json({
            'status': 'Success',
            articles
        });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again later' });
    }
}

const getArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({
            'status': 'Success',
            article
        });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again later' });
    }
}

const updateArticle = async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!article) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(201).json({
            'status': 'Success',
            article
        });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again later' });
    }
}

const deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({
            'status': 'Success',
            article: null
        });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again later' });
    }
}

module.exports = {
    createArticle,
    getArticles,
    getArticle,
    updateArticle,
    deleteArticle
}
const express = require('express')
const {
    getPostList,
    getPostById,
    updatePost,
    deletePost
} = require('../controllers/post.controller')
const router = express.Router()

router.get('/', getPostList)

module.exports = router
const postModel = require('../models/post.model')

//get post list
const getPostList = async (req, res) =>{
    try{
        const posts = await postModel.find()
        res.json({
            status : true,
            data: posts
        })
    }
    catch(err){
        res.json({
            status : false,
            message: err
        })
    }
}

//create new post
const insertPost = async (req, res) =>{
    const post = req.body
    const newPost = new postModel(post)
    try{
        await newPost.save()
        res.json({
            status: true,
            message: 'Post create successfully'
        })
    }
    catch(err){
        res.json({
            status: flase,
            message: 'Post create successfully'
        })
    }
}

//get post by id
const getPostbyId = async (req, res) =>{
    try{
        const post = await postModel.findById(req.params.id)
        res.json({
            status: true,
            data: post
        })
    }
    catch(err){
        res.json({
            status: false,
            message: err
        })
    }
}

//update post
const updatePost = async (req, res) =>{
    const post = req.body
    const newPost = new postModel(post)
    try{
        await newPost.findByIdAndUpdate({_id : req.params.id}, newPost)
        res.json({
            status: true,
            message: 'Post update successfully'
        })
    }
    catch(err){
        res.json({
            status: flase,
            message: 'Post create successfully'
        })
    }
}

//delete post
const deletePost = async (req, res) =>{
    try{
        const post = await postModel.findByIdAndDelete(res.params.id)
        res.json({
            status: true,
            message: 'Post delete successfully'
        })
    }
    catch(err){
        res.json({
            status: false,
            message: err
        })
    }
}
module.exports = {
    getPostList,
    getPostbyId,
    updatePost,
    deletePost
}
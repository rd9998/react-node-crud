const Post = require('../models/postModel');

const createPost = async(req,res)=>{
    try{
       const post = new Post({
            title:req.body.title,
            date:req.body.date,
            image:req.file.filename,
        });
        const postData = await post.save();
        res.status(200).send({msg:'data',data:postData , success:true});
    }catch (error){
        res.status(400).send({msg:error.message , success:false});
    }
};

const getPosts = async(req,res)=>{
    try{
       const posts = await Post.find({});
       res.status(200).send({msg:'data',data:posts , success:true});
    }catch (error){
        res.status(400).send({msg:error.message , success:false});
    }
};

const deletePost = async(req,res)=>{
    try{
        const postid= req.params.id;
        await Post.deleteOne({_id:postid});
       res.status(200).send({msg:'Post deleted Successfully', success:true});
    }catch (error){
        res.status(400).send({msg:error.message , success:false});
    }
};


module.exports ={
    createPost,
    getPosts,
    deletePost
}

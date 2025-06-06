
import { Post } from "../models/post.model.js";

const getPosts = async (req,res) =>{

    try {

        const result = await Post.find()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json({ message : "Can't find Posts" })
    }

}

const getOnePost = async (req, res) => {
    const {id} = req.params
    try {
        
        const result = await Post.findById(id)
        res.status(200).json(result)

    } catch (error) {
        console.log(error.message)
    }
}


const createPost = async (req, res) => {
    try {
    const { title, content, authorId } = req.body;

    const newPost = new Post({ title, content, authorId });
    await newPost.save();

    res.status(201).json({ message: 'Post created', post: newPost });
    } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
} 
};

const putPost = async (req,res) =>{

    const {id} = req.params
    const detail = req.body

    try {
        
        const result= await Post.findByIdAndUpdate(id, detail, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({ message : "Error in update" })
    }

}

const deletePost = async (req,res) =>{

    const {id} = req.params
    const detail = req.body

    try {
        
        const result= Post.findByIdAndDelete(id, detail, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({ message : "Error in delet Post" })
    }

} 

export { getPosts, getOnePost,createPost, putPost, deletePost }
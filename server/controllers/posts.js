import PostMessage from "../models/postMessage.js"


export const getPosts = async (req, res) => {
    // res.send("This is working");
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


export const createPost = async (req, res) => {
    // res.send("Post creation")
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
} 
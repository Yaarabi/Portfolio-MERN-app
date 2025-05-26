
import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,

});

export const Post = mongoose.model("Post", postSchema)

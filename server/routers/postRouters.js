
import { getPosts, createPost, putPost, deletePost, getOnePost } from "../controllers/postControlles.js";
import e from "express";

const router = e.Router()

router.get("/getPosts", getPosts);
router.get("/getPosts/:id", getOnePost)
router.post("/post", createPost);
router.put("/putPost/:id", putPost);
router.delete("/deletPost/:id", deletePost)

export default router
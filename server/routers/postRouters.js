
import { getPosts, createPost, putPost, deletePost } from "../controllers/postControlles.js";
import e from "express";

const router = e.Router()

router.get("/getPosts", getPosts);
router.post("/post", createPost);
router.put("/putPost", putPost);
router.delete("/deletPost", deletePost)

export default router
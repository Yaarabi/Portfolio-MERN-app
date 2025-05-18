
import e from "express";
import { verifyToken } from "../middelewars/middleware.js";
import User from "../models/user.model.js"


const router = e.Router();

router.get("/profile", verifyToken, async (req, res) => {
    const user = await User.findById(req.user.userId);
    res.status(200).json({ user });
});

export default router

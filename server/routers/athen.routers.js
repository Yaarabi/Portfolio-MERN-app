
import express from "express";
import { register, login } from "../controllers/authControl.js";
import { registerValidation, loginValidation, validate } from "../middelewars/validation.js";

const router = express.Router();

router.post("/register", registerValidation, validate, register);
router.post("/login", loginValidation, validate, login);

export default router;

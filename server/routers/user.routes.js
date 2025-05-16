
import e from "express";
import { getUsers, putUser, deleteUser } from "../controllers/userControl.js";


const router = e.Router()

router.get("/get", getUsers);
router.put("/put", putUser);
router.delete('/delete', deleteUser);

export default router
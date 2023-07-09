import express  from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { userModel } from "../models/users.js";

const router = express.Router();
router.post("/register", async (req, res) => {
    const {username, password} = req.body;

    const user = await userModel.findOne({username});
    res.json(user);
});






export {router as userRouter};
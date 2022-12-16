// Authentication route for login and register

import express from "express"
import { login, logout, register } from "../controllers/auth.js"


const router = express.Router()

// post because sending user information to server
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router

// 1:09:57
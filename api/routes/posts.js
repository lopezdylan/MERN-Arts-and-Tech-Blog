import express from "express"
import { addPost } from "../controllers/post.js"


const router = express.Router()

router.get("/test", addPost)

// Without ./controllers
// router.get("/", (req, res) => {
//     res.json("This is post")
// })

export default router
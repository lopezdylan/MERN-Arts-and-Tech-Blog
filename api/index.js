// Import libraries
import express from "express"

// Import routes from ./api/routes
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"

// Create app
const app = express()

// Enables us to send data to database
app.use(express.json())

// When at /api/posts it will go to the route in ./routes/posts.js
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)


// Specify which port to listen to
app.listen(8800, () => {
    console.log("Database connected!");
})
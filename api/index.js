// Import libraries
import express from "express"

// Create app
const app = express()

// Enables us to send data to database
app.use(express.json())

// Specify which port to listen to
app.listen(8800, () => {
    console.log("Database connected!");
})
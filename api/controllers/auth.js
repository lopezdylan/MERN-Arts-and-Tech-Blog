// Import db
import { db } from "../db.js";
// Import bcrypt
import bcrypt from "bcryptjs";

export const register = (req, res) => {
    
    // Query to check if user exists
    const q = "SELECT * FROM users WHERE email = ? OR username ?";

    // Will pass in req.body.email, req.body.username into the questions marks in q
    db.query(q, [req.body.email, req.body.username], (error, data) => {
        if (error) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!"); 

        // Hash password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Insert user into database
        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ];
        db.query (q, values, (error, data) => {
            if (error) return res.json(err);
            return res.status(200).json("User has been created");
        })
    });
}

export const login = (req, res) => {

}

export const logout = (req, res) => {

}
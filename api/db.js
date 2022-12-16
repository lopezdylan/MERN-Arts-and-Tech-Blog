// Create database connection

import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"042694",
    database:"ld-blog",
})
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "supmed"
})

app.get("/doctor", (req, res) => {
    const { userID, password } = req.query;

    db.query("SELECT * FROM doctor WHERE u_id = ? AND password = ?", [userID, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ result: "Failed" });
        }
        if (result.length > 0) {
            return res.json({ result: "Success" });
        } else {
            return res.json({ result: "Failed" });
        }
    })
})
app.get("/doctorName",(req, res) => {
    const { username } = req.query;
    db.query("SELECT * FROM doctor WHERE u_id = ? ", [ username ], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.listen('8081', () => {
    console.log("Server running on port 8081");
});


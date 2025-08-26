import express from "express";
import sqlite3 from "sqlite3";

const app = express();
app.use(express.json());
const port = 3000;

// Setup SQLite

const db = new sqlite3.Database("household-database");

db.serialize(() => {
    db.run(
        "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)",
    );

    // const stmt = db.prepare("INSERT INTO tasks (task) VALUES (?)");

    // stmt.run("task1");

    // stmt.finalize();

    // db.each("SELECT id, task FROM tasks", (err, row) => {
    // if (typeof row !== "undefined") {
    //     console.log(`${row.id}: ${row.task}`);
    // }
    // });
});

app.get("/hello", (req, res) => {
    res.send("Hello World");
});

app.get("/api/tasks", (req, res) => {
    console.log("Hey your getting :3");

    db.all("Select * FROM tasks", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.log(rows);
        res.json(rows);
    });
});

app.post("/api/tasks", (req, res) => {
    console.log("Hey your posting :3");

    db.run("INSERT INTO tasks (task) VALUES (?)", [req.body.task]);

    res.status(200).json({ id: this.lastID, task: req.body.task });
});

//
// Serving Static Files
const __dirname = "../client/dist/";
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

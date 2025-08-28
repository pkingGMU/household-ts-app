import express from "express";
import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
const app = express();
app.use(express.json());
const port = 3000;

// Setup SQLite

const db = new sqlite3.Database("household-database");

db.serialize(() => {
    db.run(
        "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)",
    );

    db.run(
        "CREATE TABLE IF NOT EXISTS visitors (id INTEGER PRIMARY KEY AUTOINCREMENT, visitor_text TEXT, img_link TEXT)",
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
    console.log("Hey you're posting :3");

    db.run(
        "INSERT INTO tasks (task) VALUES (?)",
        [req.body.task],
        function (err) {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Database error" });
            }
            // 'this.lastID' is available here
            res.status(200).json({ id: this.lastID, task: req.body.task });
        },
    );
});

app.delete("/api/tasks/:id", (req, res) => {
    const id = req.params.id;

    db.run("DELETE FROM tasks WHERE id = ? ", [id], function (err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            // Check if any rows were affected
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({
            message: "Item deleted successfully",
            changes: this.changes,
        });
    });
});

// Visitor Database
app.get("/api/visitor", (_, res) => {
    console.log("Hey your getting :3");

    db.all("Select * FROM visitors", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});
app.post("/api/visitors", (req, res) => {
    db.run(
        "INSERT INTO visitors (visitor_text, img_link) VALUES (?,?)",
        [req.body.text, req.body.img],
        function (err) {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Database error" });
            }
            res.status(200).json({
                id: this.lastID,
                text: req.body.text,
                img: req.body.img,
            });
        },
    );
});

app.delete("/api/visitors/:id", (req, res) => {
    const id = req.params.id;

    db.run("DELETE FROM visitors WHERE id = ? ", [id], function (err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({
            message: "Item deleted successfully",
            changes: this.changes,
        });
    });
});

//
// Serving Static Files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const clientBuildPath = join(__dirname, "../client/dist/");
app.use(express.static(clientBuildPath));

app.get("/{*any}", (_, res) => {
    res.sendFile(path.resolve(clientBuildPath, "index.html"));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

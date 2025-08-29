import express from "express";
import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import multer from "multer";
import fs from "fs";

const app = express();
app.use(express.json());
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadFolder = path.join(__dirname, "public", "data", "uploads");
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, { recursive: true });
}

console.log(uploadFolder);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });
// Setup SQLite

export const db = new sqlite3.Database("household-database");

db.serialize(() => {
    db.run(
        "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)",
    );

    db.run(
        "CREATE TABLE IF NOT EXISTS visitors (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT NULL, img BLOB NULL)",
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
type VisitorRow = { id: number; text: string; img: string | null };
type VisitorResponse = {
    id: number;
    text: string;
    imgUrl: string | null;
};

// Visitor Database
app.get("/api/visitors", (req, res) => {
    console.log("Hey, your getting :3");

    db.all("SELECT * FROM visitors", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const visitors: VisitorResponse[] = (rows as VisitorRow[]).map(
            (visitor: VisitorRow) => ({
                id: visitor.id,
                text: visitor.text,
                imgUrl: visitor.img,
            }),
        );
        res.json(visitors);
    });
});

app.post("/api/visitors", upload.single("eventImage"), (req, res) => {
    const imgFile = req.file;
    const textValue = req.body.text;
    console.log(imgFile);
    if (!textValue) {
        return res.status(400).json({ error: "No file or text provided" });
    }

    const imagePath = imgFile ? `/data/uploads/${imgFile.filename}` : null;

    db.run(
        "INSERT INTO visitors (text, img) VALUES (?, ?)",
        [textValue, imagePath],
        function (err) {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: "Database error" });
            }

            res.status(200).json({
                id: this.lastID,
                text: textValue,
                img: imgFile ? imgFile.filename : null,
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

const clientBuildPath = join(__dirname, "../client/dist/");
app.use(express.static(clientBuildPath));
app.use("/data/uploads", express.static(uploadFolder));

app.get("/{*any}", (_, res) => {
    res.sendFile(path.resolve(clientBuildPath, "index.html"));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

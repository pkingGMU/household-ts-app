import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    res.send("Hello World");
});
//
// Serving Static Files
const __dirname = "../client/dist/";
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

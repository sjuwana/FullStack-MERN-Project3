const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const db = require("./db");

app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

const PORT = process.env.PORT || 5000;

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

console.log("hello boss");
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

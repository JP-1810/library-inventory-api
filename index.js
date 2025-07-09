const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGOURL = process.env.MONGOURL;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const bookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  author: String,
  genre: String,
  publishedYear: Number,
  available: { type: Boolean, default: true },
});

const Book = mongoose.model("Book", bookSchema);

app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(401).json({ message: "The book could not be saved!" });
  }
});

app.put("/books/:id", async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

app.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book has been deleted !" });
});

mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log("Server is running on port 8080"));

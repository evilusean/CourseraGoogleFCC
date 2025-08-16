/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI.replace(/'/g, ''), { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  comments: [String]
});

const Book = mongoose.model('Book', bookSchema);

module.exports = function (app) {
  // POST /api/books
  app.post('/api/books', async (req, res) => {
    const { title } = req.body;
    if (!title) return res.send('missing required field title');
    try {
      const book = await Book.create({ title, comments: [] });
      res.json({ title: book.title, _id: book._id });
    } catch (err) {
      res.status(500).send('error');
    }
  });

  // GET /api/books
  app.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find({});
      res.json(books.map(b => ({
        _id: b._id,
        title: b.title,
        commentcount: b.comments.length
      })));
    } catch (err) {
      res.json([]); // Always return an array
    }
  });

  // GET /api/books/:id
  app.get('/api/books/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.send('no book exists');
      res.json({ _id: book._id, title: book.title, comments: book.comments });
    } catch {
      res.send('no book exists');
    }
  });

  // POST /api/books/:id
  app.post('/api/books/:id', async (req, res) => {
    const { comment } = req.body;
    if (!comment) return res.send('missing required field comment');
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.send('no book exists');
      book.comments.push(comment);
      await book.save();
      res.json({ _id: book._id, title: book.title, comments: book.comments });
    } catch {
      res.send('no book exists');
    }
  });

  // DELETE /api/books/:id
  app.delete('/api/books/:id', async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) return res.send('no book exists');
      res.send('delete successful');
    } catch {
      res.send('no book exists');
    }
  });

  // DELETE /api/books
  app.delete('/api/books', async (req, res) => {
    await Book.deleteMany({});
    res.send('complete delete successful');
  });
};

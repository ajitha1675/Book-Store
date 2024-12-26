const express = require('express')
const router = express.Router();
const Book = require('./book.model');

//post a book
// post = when submit something frontend to db
// get = when get something back from db
// put/patch == when edit/ update something
//delete = when delete something

//post a book
router.post('/create-book', async (req,res) =>{
  try {
      const newBook = await Book({...req.body});
      await newBook.save();
      res.status(200).send({
        message: "Book posted successfully", book: newBook
      })
  } catch (error) {
      console.error("Error creating book", error);
      res.status(500).send({
        message: "Failed to create book"
      })
  }
})

module.exports = router;
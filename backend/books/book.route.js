const express = require('express')
const router = express.Router();
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require('./book.controller'); 

//frontend => backend server => controller => book schema => database => send to server => back to the frontend
//post a book
// post = when submit something frontend to db
// get = when get something back from db
// put/patch == when edit/ update something
//delete = when delete something

//post a book
router.post('/create-book', postABook)

//get all books
router.get('/', getAllBooks)

//single book endpoint
router.get("/:id", getSingleBook)

//update a book endpoint
router.put("/edit/:id", updateBook)

//delete book
router.delete("/delete/:id", deleteABook)


module.exports = router;
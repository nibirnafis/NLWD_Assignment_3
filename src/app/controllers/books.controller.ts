import express, { Request, Response } from "express"
import { Book } from "../model/books_model"


export const booksRoutes = express.Router()



// get all books
booksRoutes.get('/api/books', async (req : Request, res : Response) => {
  const allBook = await Book.find({ })

  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data: allBook
  })
})



// get book
booksRoutes.get('/api/books/:id', async (req : Request, res : Response) => {
  const bookId = req.params.id
  const book = await Book.findById(bookId)

  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data: book
  })
})



// update
booksRoutes.put('/api/books/:id', async (req : Request, res : Response) => {
  const bookId = req.params.id
  const body = req.body
  const book = await Book.findOneAndUpdate( { _id: bookId }, body, { new: true})

  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data: book
  })
})



// Delete
booksRoutes.delete('/api/books/:id', async (req : Request, res : Response) => {
  const bookId = req.params.id
  const book = await Book.findOneAndDelete( { _id: bookId })

  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data: book
  })
})



// Post
booksRoutes.post('/api/books', async (req : Request, res : Response) => {

  const body = req.body
  const book = await Book.create(body)

  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: book
  })

})
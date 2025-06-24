import express, { Request, Response } from "express"
import { Book } from "../model/books_model"
import { validationError } from "../error/errors"
import { BorrowBook } from "../model/borrow_model"


export const booksRoutes = express.Router()



// get all books
booksRoutes.get('/api/books', async (req : Request, res : Response) => {
  const { filter, sortBy, sort, limit } = req.query
  console.log(filter, sortBy, sort, limit)
  const filteredBooks = await Book.find({genre: filter}).sort({sortBy: (sort === "asc" ? 1 : -1)}).limit(Number(limit) || 10)
  const allBooks = await Book.find()

  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data: req.query.filter === undefined ? allBooks : filteredBooks
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

  try{
      const body = req.body
      console.log(body)
      const book = await Book.create(body)
    
      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: book
      })
  }catch{
      res.status(400).json({
        message: "Validation failed",
        success: false,
        data: validationError
      })
  }
})




  // borrow book
  booksRoutes.post('/api/borrow', async (req : Request, res : Response) => {

  try{
      const bookId = req.query.book as string
      const quantity = req.query.quantity as string
      const dueDate = req.query.dueDate
      
      /* const borrowedBook = await BorrowBook.create({ book, quantity, dueDate })
      console.log(borrowedBook) */

      const borobook = await Book.updateBooks(bookId, quantity)
      console.log(borobook)
    
      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: borobook
      })
  }catch{
      res.status(400).json({
        message: "Validation failed",
        success: false,
        data: validationError
      })
  }
})
  



// get borrow book
  booksRoutes.get('/api/borrow', async (req : Request, res : Response) => {

  try{
      const borrowedBook = await BorrowBook.find()
      console.log(borrowedBook)

      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: borrowedBook
      })
  }catch{
      res.status(400).json({
        message: "Validation failed",
        success: false,
        data: validationError
      })
  }
})
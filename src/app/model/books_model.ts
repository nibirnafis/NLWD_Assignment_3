import { model, Schema } from "mongoose"
import { BookModel, books } from "../interfaces/books.interface"

const bookSchema = new Schema<books>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"] },
    isbn: { type: String, unique: true, required: true },
    description: { type: String },
    copies: { type: Number, min: 0, required: true },
    available: { type: Boolean, default: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

bookSchema.statics.updateBooks = async function(bookId: string, quantity: number){
  const book = Book.find({ _id: bookId })
  return book
}



export const Book = model<books, BookModel>("Book", bookSchema)
import mongoose, { Model, model, Schema } from "mongoose";
import { books } from "../interfaces/books.interface";
import { borrowBooks } from "../interfaces/borrowBooks.interface";

const borrowSchema = new Schema<borrowBooks>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"] },
    isbn: { type: String, unique: true, required: true },
    description: { type: String },
    copies: { type: Number, min: 0, required: true },
    available: { type: Boolean, default: true },
    book: { type: String },
    quantity: { type: Number, min: 1 },
    dueDate: { type: Date }
  },
  {
    versionKey: false,
    timestamps: true
  }
)


export const BorrowBook = model("borrowbook", borrowSchema)



/* interface borrowBookModel extends Model<borrowBook>{
    borrowBook(book: {type: String}, quantity: { type: Number, min: 1}, dueDate: {type: Date}): Promise<any>
} */















/* interface borrowModel extends Model<books>{
    // borrowBook(book: {type: String}, quantity: { type: Number, min: 1}, dueDate: {type: Date}): Promise<any>
    borrowBook(book: string, quantity: Number, dueDate: Date): Promise<any>
}


const borrowSchema = new Schema<books, borrowModel>({
  book: {type: String},
  quantity: { type: Number, min: 1},
  dueDate: {type: Date}
}) */
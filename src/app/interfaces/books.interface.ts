import { Model } from "mongoose";

export interface books{
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description: string,
    copies: number,
    available: boolean
  }


export interface BookModel extends Model<books> {
  updateBooks(bookId: string, quantity: string): Promise<books>;
}


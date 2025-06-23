import mongoose, { Date, Model } from "mongoose";
import { books } from "./books.interface";

export interface borrowBooks extends books{
    book: string,
    quantity: number,
    dueDate: Date
}



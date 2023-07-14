import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./books.interface";

const BookSchema = new Schema<IBook, BookModel>(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
      reviews: [
        {
            type: String
        }
      ],
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
      },
    }
  );

 export const Book = model<IBook, BookModel>('Book', BookSchema);
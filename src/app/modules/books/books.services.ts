
import { IBook } from "./books.interface";
import { Book } from "./books.model";


const createBook = async (book: IBook): Promise<IBook | null> => {

    const newBook = await Book.create(book)
    return newBook;
  }

  export const BookServices = {
    createBook
  }

import { IBook } from "./books.interface";
import { Book } from "./books.model";


const createBook = async (book: IBook): Promise<IBook | null> => {

    const newBook = await Book.create(book)
    return newBook;
  }

  const getSingleBook = async (id: string): Promise<IBook | null> => {
    const result = await Book.findOne({ _id: id })
    return result
  }


  export const BookServices = {
    createBook,
    getSingleBook,
  }
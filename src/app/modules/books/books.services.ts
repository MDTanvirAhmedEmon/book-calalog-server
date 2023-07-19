
import { SortOrder } from "mongoose";
import { paginationHelper } from "../../../helpers/paginationHelper";
import { IpaginationOptions } from "../../../interfaces/paginations";
import { IBook, IBookFilters, bookSearchableFields } from "./books.interface";
import { Book } from "./books.model";
import { IGenericResponse } from "../../../interfaces/common";


const createBook = async (book: IBook): Promise<IBook | null> => {

    const newBook = await Book.create(book)
    return newBook;
  }


  const getAllBooks = async (
    filters: IBookFilters,
    paginationOptions: IpaginationOptions
  ): Promise<IGenericResponse<IBook[]>> => {
    const { searchTerm, ...filtersData } = filters
    const { page, limit, skip, sortBy, sortOrder } =
      paginationHelper.calculatePagination(paginationOptions)
  
    const andConditions = []
  
    if (searchTerm) {
      andConditions.push({
        $or: bookSearchableFields.map(field => ({
          [field]: {
            $regex: searchTerm,
            $options: 'i',
          },
        })),
      })
    }
  
    if (Object.keys(filtersData).length) {
      andConditions.push({
        $and: Object.entries(filtersData).map(([field, value]) => ({
          [field]: value,
        })),
      })
    }
  
    const sortConditions: { [key: string]: SortOrder } = {}
  
    if (sortBy && sortOrder) {
      sortConditions[sortBy] = sortOrder
    }
    const whereConditions =
      andConditions.length > 0 ? { $and: andConditions } : {}
  
    const result = await Book.find(whereConditions)
      .sort(sortConditions)
      .skip(skip)
      .limit(limit)
  
    const total = await Book.countDocuments(whereConditions)
  
    return {
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    }
  }


  const getSingleBook = async (id: string): Promise<IBook | null> => {
    const result = await Book.findOne({ _id: id })
    return result
  }

  
const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {

  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteBook = async (
  id: string
): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete({_id: id})
  return result
}

const recentBooks = async (): Promise<IBook[] | null> => {
  const books = await Book.find({}).sort({ createdAt: -1 }).limit(10);
  return books;
}
const postComment = async (id: string, comment: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndUpdate(
    { _id: id },
    { $push: { reviews: comment } },
    { new: true },
  );
  return result;
}

const getComment = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOne(
    { _id: id },
    { reviews: 1, _id: 0 }
  );
  return result;
}



  export const BookServices = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
    recentBooks,
    postComment,
    getComment,
  }
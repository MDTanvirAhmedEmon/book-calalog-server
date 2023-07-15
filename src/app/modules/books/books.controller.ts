import httpStatus from "http-status";
import { Request, RequestHandler, Response } from "express";

import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IBook, bookFilterableFields, paginationFields } from "./books.interface";
import { BookServices } from "./books.services";
import pick from "../../../shared/pick";



const createBook: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { ...book } = req.body;
      const result = await BookServices.createBook(book)
  
      sendResponse<IBook>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'book created successfully!',
        data: result,
      })
    }
  )

  const getAllBooks = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, bookFilterableFields)
    const paginationOptions = pick(req.query, paginationFields)
  
    const result = await BookServices.getAllBooks(filters, paginationOptions)
  
    sendResponse<IBook[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books retrieved successfully!',
      meta: result.meta,
      data: result.data,
    })
  })

  const getSingleBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
  
    const result = await BookServices.getSingleBook(id)
  
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'book retrieved successfully !',
      data: result,
    })
  })
  const updateBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const updateBook = req.body
  
    const result = await BookServices.updateBook(id, updateBook)
  
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'book updated successfully !',
      data: result,
    })
  })
  const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
  
    const result = await BookServices.deleteBook(id)
  
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'book deleted successfully !',
      data: result,
    })
  })

export const BookControllers = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
}

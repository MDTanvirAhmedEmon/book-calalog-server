import httpStatus from "http-status";
import { Request, RequestHandler, Response } from "express";

import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IBook } from "./books.interface";
import { BookServices } from "./books.services";



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

export const BookControllers = {
    createBook,
    getSingleBook,
}

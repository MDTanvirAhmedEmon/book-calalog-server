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
        message: 'user created successfully!',
        data: result,
      })
    }
  )

export const BookControllers = {
    createBook
}
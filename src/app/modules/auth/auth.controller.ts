import httpStatus from "http-status";
import { Request, RequestHandler, Response } from "express";
import { IUser } from "../users/user.interface";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AuthServices } from "./auth.services";


const createUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { ...userData } = req.body;
      const result = await AuthServices.createUser(userData)
  
      sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user created successfully!',
        data: result,
      })
    }
  )
const signInUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { ...userData } = req.body;
      const result = await AuthServices.signInUser(userData)
  
      sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user Sign In successfully!',
        data: result,
      })
    }
  )

export const AuthControllers = {
    createUser,
    signInUser
}
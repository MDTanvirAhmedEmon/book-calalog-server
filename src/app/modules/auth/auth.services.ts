import httpStatus from "http-status";
import { IUser } from "../users/user.interface";
import { User } from "../users/user.model";
import ApiError from "../../../errors/ApiError";


const createUser = async (user: IUser): Promise<IUser | null> => {

    const {email} = user;
    const duplicateEmail = await User.findOne({email: email})
    if(duplicateEmail){
      throw new ApiError(httpStatus.BAD_REQUEST, 'This Email is already in use');
    };
  
    const newUser = await User.create(user)
    return newUser;
  }

  export const AuthServices = {
    createUser
  }
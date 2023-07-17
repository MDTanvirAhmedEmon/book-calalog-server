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
const signInUser = async (data: Partial<IUser>): Promise<IUser | null> => {

    const {email, password} = data;
    const userFromDB = await User.findOne({email: email})
 
    const dbUserPassword = userFromDB?.password

    // const { password } = userFromDB;

    if(password !== dbUserPassword){
      throw new Error('wrong password');
    }
      
    return userFromDB;
  }

  export const AuthServices = {
    createUser,
    signInUser,
  }
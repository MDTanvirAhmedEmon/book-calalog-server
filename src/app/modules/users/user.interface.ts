import { Model } from "mongoose";


export type IUser = {
  name: string;
  email: string;
  password: string;
};
export type UserModel = Model<IUser, {}>;
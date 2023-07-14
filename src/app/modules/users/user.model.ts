import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const UserSchema = new Schema<IUser, UserModel>(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
      },
    }
  );

 export const User = model<IUser, UserModel>('User', UserSchema);
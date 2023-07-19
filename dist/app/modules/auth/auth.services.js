"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("../users/user.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = user;
    const duplicateEmail = yield user_model_1.User.findOne({ email: email });
    if (duplicateEmail) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'This Email is already in use');
    }
    ;
    const newUser = yield user_model_1.User.create(user);
    return newUser;
});
const signInUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const userFromDB = yield user_model_1.User.findOne({ email: email });
    const dbUserPassword = userFromDB === null || userFromDB === void 0 ? void 0 : userFromDB.password;
    // const { password } = userFromDB;
    if (password !== dbUserPassword) {
        throw new Error('wrong password');
    }
    return userFromDB;
});
exports.AuthServices = {
    createUser,
    signInUser,
};

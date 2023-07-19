"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const auth_route_1 = require("./app/modules/auth/auth.route");
const books_route_1 = require("./app/modules/books/books.route");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/auth', auth_route_1.AuthRoutes);
app.use('/api/v1/book', books_route_1.BookRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post('/books', books_controller_1.BookControllers.createBook);
router.get('/recent', books_controller_1.BookControllers.recentBooks);
router.get('/books', books_controller_1.BookControllers.getAllBooks);
router.get('/:id', books_controller_1.BookControllers.getSingleBook);
router.patch('/:id', books_controller_1.BookControllers.updateBook);
router.delete('/:id', books_controller_1.BookControllers.deleteBook);
router.post('/comment/:id', books_controller_1.BookControllers.postComment);
router.get('/comment/:id', books_controller_1.BookControllers.getComment);
exports.BookRoutes = router;

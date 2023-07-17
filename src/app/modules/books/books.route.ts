import express from 'express'
import { BookControllers } from './books.controller'


const router = express.Router()

router.post('/books', BookControllers.createBook)
router.get('/recent', BookControllers.recentBooks)
router.get('/books', BookControllers.getAllBooks)
router.get('/:id', BookControllers.getSingleBook)
router.patch('/:id', BookControllers.updateBook)
router.delete('/:id', BookControllers.deleteBook)
router.post('/comment/:id', BookControllers.postComment)
router.get('/comment/:id', BookControllers.getComment)



export const BookRoutes = router;
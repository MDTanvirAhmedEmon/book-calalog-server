import express from 'express'
import { BookControllers } from './books.controller'


const router = express.Router()

router.post('/books', BookControllers.createBook)
router.get('/books', )
router.get('/:id', BookControllers.getSingleBook)
router.patch('/:id', )
router.delete('/:id', )


export const BookRoutes = router;
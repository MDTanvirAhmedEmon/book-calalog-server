import express from 'express'
const app = express()
import cors from 'cors'
import { AuthRoutes } from './app/modules/auth/auth.route'
import { BookRoutes } from './app/modules/books/books.route'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/auth', AuthRoutes)
app.use('/api/v1/book', BookRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app;
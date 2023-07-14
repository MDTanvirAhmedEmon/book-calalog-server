import express from 'express'
import { AuthControllers } from './auth.controller'

const router = express.Router()

router.post('/signup', AuthControllers.createUser)


export const AuthRoutes = router
import express from 'express'
import { AuthControllers } from './auth.controller'

const router = express.Router()

router.post('/signup', AuthControllers.createUser)
router.post('/signin', AuthControllers.signInUser)


export const AuthRoutes = router
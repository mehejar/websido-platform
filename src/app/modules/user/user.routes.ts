import express from 'express'
import { userController } from './user.controllers'
const router = express.Router()

router.post('/sign-up', userController.createUser)

export const userRoutes = router

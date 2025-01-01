import express from 'express'
import { orderController } from './order.comtroller'
const router = express.Router()

router.post('/place-order', orderController.placeOrder)

export const orderRoutes = router

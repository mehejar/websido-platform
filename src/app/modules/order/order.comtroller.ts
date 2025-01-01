import catchAsync from "../../utils/catchAynce";
import { OrderServices } from "./order.services";

const placeOrder = catchAsync(async (req, res) => {
    const { orderData } = req.body
    const result = await OrderServices.placeOrder(orderData)

    res.status(200).json({
        success: true,
        message: "Your Order Placed Successfully",
        data: result
    })
})

export const orderController = {
    placeOrder
}
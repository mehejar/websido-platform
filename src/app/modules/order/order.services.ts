import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const placeOrder = async (payload: TOrder) => {
    const result = await OrderModel.create(payload)
    return result
}

export const OrderServices = {
    placeOrder
}
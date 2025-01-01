import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

export const orderSchema = new Schema<TOrder>({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    projectName: { type: String, require: true },
    service: { type: String, require: true },
    budget: { type: Number, require: true },
    payment: {
        type: String,
        enum: ['paid', 'unpaid', 'half-paid'],
        default: 'unpaid'
    },
    duration: { type: Number, require: true, },
    orderStatus: {
        type: String,
        enum: ['pending', 'confirm'],
        default: 'pending'
    }
})

export const OrderModel = model<TOrder>('Order', orderSchema)
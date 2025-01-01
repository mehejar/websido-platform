import { Types } from "mongoose"

export type TOrder = {
    buyer: Types.ObjectId;
    projectName: string;
    service: string;
    budget: number;
    payment: 'paid' | 'unpaid' | 'half-paid';
    duration: number;
    orderStatus: 'pending' | 'confirm'
}
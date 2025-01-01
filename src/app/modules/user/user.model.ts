import { model, Schema } from "mongoose";
import { TName, TUser } from "./user.interface";

const nameSchema = new Schema<TName>({
    firstName: {
        type: String, required: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String, required: true
    }
})

const userSchema = new Schema<TUser>({
    name: nameSchema,
    email: {
        type: String, required: true,
    },
    contact: {
        type: Number, required: true
    },
    password: {
        type: String, required: true,
    },

    role: {
        type: String,
        enum: ['user'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['in-progess', 'blocked'],
        default: 'in-progess'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }


},
    {
        timestamps: true
    })


export const User = model<TUser>('User', userSchema)
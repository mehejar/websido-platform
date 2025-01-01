import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDb = async (payload: TUser) => {
    const { email } = payload

    const isUserExist = await User.findOne({ email })
    if (isUserExist) {
        throw new Error('You already have an account')
    }
    const result = await User.create(payload)
    return result

}

export const userServices = {
    createUserIntoDb
}
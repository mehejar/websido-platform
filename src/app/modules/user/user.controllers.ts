import catchAsync from "../../utils/catchAynce";
import { userServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
    const userData = req.body
    const result = await userServices.createUserIntoDb(userData)
    res.status(200).json({
        success: true,
        message: "Your Account Created",
        date: result
    })
})

export const userController = {
    createUser
}
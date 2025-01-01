import mongoose from "mongoose";
import { TGenericErrorResposne } from "./zodHandler";
import { TErrorSource } from "../modules/user/user.interface";

const handleValidationError = (err: mongoose.Error.ValidationError): TGenericErrorResposne => {

    const errorSources: TErrorSource = Object.values(err.errors).map((val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        return {
            path: val?.path,
            message: val?.message
        }
    })




    const statusCode = 400
    return {
        statusCode,
        message: "Zod Validation Error",
        errorSources,

    }
}

export default handleValidationError
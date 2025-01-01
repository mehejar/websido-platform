import mongoose from "mongoose"
import { TErrorSource } from "../modules/user/user.interface"
import { TGenericErrorResposne } from "./zodHandler"

const handleCastError = (err: mongoose.Error.CastError): TGenericErrorResposne => {

    const errorSources: TErrorSource = [{
        path: err?.path,
        message: err?.message
    }]
    const statusCode = 400
    return {
        statusCode,
        message: 'Validation Error',
        errorSources
    }
}

export default handleCastError
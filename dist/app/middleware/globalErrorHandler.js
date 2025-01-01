"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const zodHandler_1 = __importDefault(require("../errors/zodHandler"));
const castHandler_1 = __importDefault(require("../errors/castHandler"));
const handleValidation_1 = __importDefault(require("../errors/handleValidation"));
const globalErrorHandler = (err, req, res, next) => {
    // setting default values
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something went wrong!';
    let errorSources = [{
            path: '',
            message: '',
        }];
    // handler create
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, zodHandler_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, handleValidation_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'CastError') {
        const simplifiedError = (0, castHandler_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    // else if (err?.code === 11000) {
    //     const simplifiedError = handleDuplicateError(err)
    //     statusCode = simplifiedError?.statusCode;
    //     message = simplifiedError?.message
    //     errorSources = simplifiedError?.errorSources
    // }
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        // error: err,
    });
};
exports.default = globalErrorHandler;

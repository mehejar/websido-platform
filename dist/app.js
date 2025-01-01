"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAController = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const user_routes_1 = require("./app/modules/user/user.routes");
const app = (0, express_1.default)();
// const port = 3000
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application routes
app.use('/api/users', user_routes_1.userRoutes);
const getAController = (req, res) => {
    res.send('Hello Websido!');
};
exports.getAController = getAController;
app.get('/', exports.getAController);
app.use(globalErrorHandler_1.default);
exports.default = app;

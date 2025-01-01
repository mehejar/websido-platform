"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String, required: true,
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
        enum: ['in-progeess', 'blocked'],
        default: 'in-progeess'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)('User', userSchema);

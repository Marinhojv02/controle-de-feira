"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(4, { message: "Name must be greater than 4" }),
        username: zod_1.z.string().min(4, { message: "username must be greater than 4" }),
        password: zod_1.z.string().min(6, { message: "password must be greater than 6" }),
        email: zod_1.z.string().email(),
        type: zod_1.z.string(),
    })
});
exports.updateUserSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string()
    }),
    body: zod_1.z.object({
        name: zod_1.z.string().min(4, { message: "Name must be greater than 4" }),
        username: zod_1.z.string().min(4, { message: "username must be greater than 4" }),
        password: zod_1.z.string().min(6, { message: "password must be greater than 6" }),
        email: zod_1.z.string().email(),
        type: zod_1.z.string(),
    })
});

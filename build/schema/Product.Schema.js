"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        product_name: zod_1.z.string().min(4, { message: "Name must be greater than 4" }),
        description: zod_1.z.string(),
        category: zod_1.z.string().min(4, { message: "Category must be greater than 4" }),
    })
});
exports.updateProductSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string()
    }),
    body: zod_1.z.object({
        product_name: zod_1.z.string().min(4, { message: "Name must be greater than 4" }),
        description: zod_1.z.string(),
        category: zod_1.z.string().min(4, { message: "Category must be greater than 4" })
    })
});

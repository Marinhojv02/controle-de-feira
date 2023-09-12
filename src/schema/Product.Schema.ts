import {z} from "zod"

export const createProductSchema  = z.object({
    body:z.object({
        product_name:z.string().min(4, {message: "Name must be greater than 4"}) ,
        description:z.string(),
        category:z.string().min(4, {message: "Category must be greater than 4"}) ,
    })
})

export const updateProductSchema = z.object({
    params: z.object({
        id:z.string()
    }),
    body:z.object({
        product_name:z.string().min(4, {message: "Name must be greater than 4"}) ,
        description:z.string(),
        category:z.string().min(4, {message: "Category must be greater than 4"})
    })
})
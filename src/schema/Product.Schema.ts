import {z} from "zod"

export const createProductSchema  = z.object({
    body:z.object({
        product_name:z.string().min(4, {message: "Name must be greater than 4"}) ,
        category:z.string().min(4, {message: "Category must be greater than 4"}) ,
        quantity_in_stock:z.number(),
        reorder_point:z.number(),
        recommended_quantity:z.number(),
    })
})

export const updateProductSchema = z.object({
    params: z.object({
        id:z.string()
    }),
    body:z.object({
        product_name:z.string().min(4, {message: "Name must be greater than 4"}) ,
        category:z.string().min(4, {message: "Category must be greater than 4"})
    })
})
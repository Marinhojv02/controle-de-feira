import {z} from "zod"

export const createUserSchema  = z.object({
    body:z.object({
        name:z.string().min(4, {message: "Name must be greater than 4"}),
        username:z.string().min(4, {message: "username must be greater than 4"}),
        password:z.string().min(6, {message: "password must be greater than 6"}),
        email:z.string().email(),
        type:z.string(),
    })
})

export const updateUserSchema = z.object({
    params: z.object({
        id:z.string()
    }),
    body:z.object({
        name:z.string().min(4, {message: "Name must be greater than 4"}),
        username:z.string().min(4, {message: "username must be greater than 4"}),
        password:z.string().min(6, {message: "password must be greater than 6"}),
        email:z.string().email(),
        type:z.string(),
    })
})
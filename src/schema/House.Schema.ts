import {z} from "zod"

const userHouseSchema = z.object({
    user_id: z.number(),
});

export const createHouseSchema  = z.object({
    body:z.object({
        house_name:z.string().min(4, {message: "Name must be greater than 4"}) ,
        house_residents:z.array(userHouseSchema)
    })
})

export const updateHouseSchema = z.object({
    params: z.object({
        id:z.string()
    }),
    body:z.object({
        house_name:z.string().min(4, {message: "Name must be greater than 4"}) ,
        house_residents:z.array(userHouseSchema)
    })
})
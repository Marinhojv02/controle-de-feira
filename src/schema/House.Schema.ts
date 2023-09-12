import {z} from "zod"

const userHouseSchema = z.object({
    user_id: z.number(),
});

export const createHouseSchema  = z.object({
    body:z.object({
        house:z.object({
            house_name:z.string().min(4, {message: "Name must be greater than 4"}) ,
        }),
        people:z.union([
            z.array(userHouseSchema),
            z.null(),
            z.undefined(),
        ])
    })
})

export const updateHouseSchema = z.object({
    params: z.object({
        id:z.string()
    }),
    body:z.object({
        house:z.object({
            house_name:z.string().min(4, {message: "Name must be greater than 4"}) ,
        }),
        people:z.union([
            z.array(userHouseSchema),
            z.null(),
            z.undefined(),
        ])
    })
})
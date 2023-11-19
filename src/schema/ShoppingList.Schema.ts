import {z} from "zod"

export const shopping_list_items = z.object({
    house_product_id: z.number(),
    quantity: z.number(),
})

export const createShoppingListSchema  = z.object({
    body:z.object({
        shopping_list:z.object({
            user_id:z.string() ,
            is_custom:z.boolean() ,
            is_complete:z.boolean() ,
        }),
        shopping_list_items:z.union([
            z.array(shopping_list_items),
            z.null(),
            z.undefined(),
        ])
    })
})

export const updateShoppingListSchema = z.object({
    params: z.object({
        id:z.string()
    }),
    body:z.object({
        shopping_list:z.object({
            user_id:z.string() ,
            is_custom:z.boolean() ,
            is_complete:z.boolean() ,
        }),
        shopping_list_items:z.array(shopping_list_items),
    })
})
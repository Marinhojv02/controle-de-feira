import { ShoppingList } from "../model/ShoppingList.Model";
import { ShoppingListItem } from "../model/ShoppingListItem.Model"
import { ShoppingListItemsRepo } from "../repository/ShoppingListItemRepo"


class ShoppingListItemUsecase{
    async saveBulk(shopping_list_items: { house_product_id: number, quantity: number }[], savedShoppingList:ShoppingList){
        const shoppingListItems = shopping_list_items.map((item_info: {house_product_id: number; quantity: number; }) => {
            const new_item = new ShoppingListItem();
            new_item.shopping_list_id = savedShoppingList.shopping_list_id;
            new_item.house_product_id = item_info.house_product_id;
            new_item.quantity = item_info.quantity;
            return new_item;
        });

        await new ShoppingListItemsRepo().saveBulk(shoppingListItems);
    };
    async updateBulk(shopping_list_items:{ shopping_list_id: number, house_product_id: number, quantity: number}[]){
        const shoppingListItems = shopping_list_items.map((item_info: { shopping_list_id: number; house_product_id: number; quantity: number; }) => {
            const new_item = new ShoppingListItem();
            new_item.shopping_list_id = item_info.shopping_list_id;
            new_item.house_product_id = item_info.house_product_id;
            new_item.quantity = item_info.quantity;
            return new_item;
        });
        return await new ShoppingListItemsRepo().updateBulk(shoppingListItems)
    };
    async retrieveByShoppingListId(shopping_list_id: number){
        return await new ShoppingListItemsRepo().retrieveByShoppingListId(shopping_list_id)
    };
}

export default new ShoppingListItemUsecase()
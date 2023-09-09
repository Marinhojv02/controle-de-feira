import { ShoppingListItem } from "../model/ShoppingListItem.Model";

interface IShoppingListItems {
    save(shopping_list_item: ShoppingListItem): Promise<void>;
    saveBulk(shopping_list_item: ShoppingListItem[]): Promise<void>;
    update(shopping_list_item: ShoppingListItem): Promise<void>;
    delete(shopping_list_itemId: number): Promise<void>;
    retrieveById(shopping_list_itemId: number): Promise<ShoppingListItem>;
    retrieveByShoppingListId(shopping_list_itemId: number): Promise<ShoppingListItem[]>;
    retrieveAll(): Promise<ShoppingListItem[]>;
}

export class ShoppingListItemsRepo implements IShoppingListItems {
    async save(shopping_list_item: ShoppingListItem): Promise<void> {
        try {
            await ShoppingListItem.create({
                shopping_list_id : shopping_list_item.shopping_list_id,
                product_id : shopping_list_item.product_id,
                quantity : shopping_list_item.quantity,
            });
        } catch (error) {
             throw new Error("Failed to create shopping_list_item!");
        }
    }

    async saveBulk(shoppingListItems: ShoppingListItem[]): Promise<void> {
      try {
        const shoppingListItemsData = shoppingListItems.map((item) => ({
          shopping_list_id: item.shopping_list_id,
          product_id: item.product_id,
          quantity: item.quantity,
        }));
    
        await ShoppingListItem.bulkCreate(shoppingListItemsData);
      } catch (error) {
        throw new Error("Failed to create shopping_list_items!");
      }
    }

    async update(shopping_list_item: ShoppingListItem): Promise<void> {
        try {
          const new_shopping_list_item = await ShoppingListItem.findOne({
            where: {
                shopping_list_item_id: shopping_list_item.id,
            },
          });
          if (!new_shopping_list_item) {
            throw new Error("ShoppingListItem not found!");
          }
          
          new_shopping_list_item.shopping_list_id = shopping_list_item.shopping_list_id,
          new_shopping_list_item.product_id = shopping_list_item.product_id,
          new_shopping_list_item.quantity = shopping_list_item.quantity,


          await new_shopping_list_item.save();
        } catch (error) {
            console.log(error)
          throw new Error("Failed to update shopping_list_item!");
        }
      }
    
    async delete(shopping_list_itemId: number): Promise<void> {
        try {
          const new_shopping_list_item = await ShoppingListItem.findOne({
            where: {
                shopping_list_item_id: shopping_list_itemId,
            },
          });
          if (!new_shopping_list_item) {
            throw new Error("ShoppingListItem not found!");
          }
    
          await new_shopping_list_item.destroy();
        } catch (error) {
          throw new Error("Failed to delete shopping_list_item!");
        }
      }
    
    async retrieveById(shopping_list_itemId: number): Promise<ShoppingListItem> {
        try {
          const new_shopping_list_item = await ShoppingListItem.findOne({
            where: {
                shopping_list_item_id: shopping_list_itemId,
            },
          });
          if (!new_shopping_list_item) {
            throw new Error("ShoppingListItems not found!");
          }
          return new_shopping_list_item;
        } catch (error) {
          throw new Error("Failed to retrieve shopping_list_items!");
        }
      }
      
    async retrieveAll(): Promise<ShoppingListItem[]> {
        try {
         return await ShoppingListItem.findAll();
        } catch (error) {
          throw new Error("Failed to retrieve shopping_list_item!");
        }
      }

    async retrieveByShoppingListId(shopping_listId: number): Promise<ShoppingListItem[]>{
      try {
        const shopping_list_items = await ShoppingListItem.findAll({
          where: {
              shopping_list_id: shopping_listId,
          },
        });
        if (!shopping_list_items) {
          throw new Error("ShoppingListItems not found!");
        }
        return shopping_list_items;
      } catch (error) {
        throw new Error("Failed to retrieve shopping_list_items!");
      }
    };
}
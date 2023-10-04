import { Sequelize, Op } from "sequelize";
import { ShoppingListItem } from "../model/ShoppingListItem.Model";

interface IShoppingListItems {
    save(shopping_list_item: ShoppingListItem): Promise<void>;
    saveBulk(shopping_list_item: ShoppingListItem[]): Promise<ShoppingListItem[]>;
    update(shopping_list_item: ShoppingListItem): Promise<void>;
    updateBulk(shopping_list_item: ShoppingListItem[]): Promise<void>;
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
                house_product_id : shopping_list_item.house_product_id,
                quantity : shopping_list_item.quantity,
            });
        } catch (error) {
            throw new Error("Failed to create shopping_list_item!");
        }
    }
    
    async saveBulk(shoppingListItems: ShoppingListItem[]): Promise<ShoppingListItem[]> {
      try {
        const shoppingListItemsData = shoppingListItems.map((item) => ({
          shopping_list_id: item.shopping_list_id,
          house_product_id: item.house_product_id,
          quantity: item.quantity,
        }));
    
        return await ShoppingListItem.bulkCreate(shoppingListItemsData);
      } catch (error) {
          throw new Error("Failed to create shopping_list_items!");
        }
    }
    
    async update(shopping_list_item: ShoppingListItem): Promise<void> {
        try {
            const new_shopping_list_item = await ShoppingListItem.findOne({
                where: {
                    shopping_list_id: shopping_list_item.shopping_list_id,
                    house_product_id: shopping_list_item.house_product_id,
                },
            });
            if (!new_shopping_list_item) {
                throw new Error("ShoppingListItem not found!");
            }
          
            new_shopping_list_item.shopping_list_id = shopping_list_item.shopping_list_id,
            new_shopping_list_item.house_product_id = shopping_list_item.house_product_id,
            new_shopping_list_item.quantity = shopping_list_item.quantity,
            
            
            await new_shopping_list_item.save();
        } catch (error) {
            console.log(error)
          throw new Error("Failed to update shopping_list_item!");
        }
    }
    
    async updateBulk(shopping_list_items: ShoppingListItem[]): Promise<void> {
        const existingItems: ShoppingListItem[] = [];
        const nonExistingItems: {shopping_list_id: number,house_product_id: number,quantity: number;}[] = [];
        const savePromises: Promise<ShoppingListItem>[] = [];

        for (const shopping_list_item of shopping_list_items) {
            try {
                const existingItem = await ShoppingListItem.findOne({
                    where: {
                        shopping_list_id: shopping_list_item.shopping_list_id,
                        house_product_id: shopping_list_item.house_product_id,
                    },
                });
    
                if (existingItem) {
                    existingItem.shopping_list_id = shopping_list_item.shopping_list_id;
                    existingItem.house_product_id = shopping_list_item.house_product_id;
                    existingItem.quantity = shopping_list_item.quantity;
                    
                    existingItems.push(existingItem);
                    if(existingItem.quantity == 0){
                        existingItem.destroy();
                    }else{
                        savePromises.push(existingItem.save());
                    }
                } else {
                    const newItem = {
                        shopping_list_id: shopping_list_item.shopping_list_id,
                        house_product_id: shopping_list_item.house_product_id,
                        quantity: shopping_list_item.quantity,
                    };
    
                    nonExistingItems.push(newItem);
                }
            } catch (error) {
                console.error(error);
                throw new Error("Failed to update shopping_list_item(s)!");
            }
        }
    
        await Promise.all(savePromises);
        await ShoppingListItem.bulkCreate(nonExistingItems);    
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
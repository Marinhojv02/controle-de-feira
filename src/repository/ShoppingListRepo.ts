import { ShoppingList } from "../model/ShoppingList.Model";

interface IShoppingLists {
    save(shopping_list: ShoppingList): Promise<void>;
    update(shopping_list: ShoppingList): Promise<void>;
    delete(shopping_listId: number): Promise<void>;
    retrieveById(shopping_listId: number): Promise<ShoppingList>;
    retrieveAll(): Promise<ShoppingList[]>;
}

export class ShoppingListsRepo implements IShoppingLists {
    async save(shopping_list: ShoppingList): Promise<void> {
        try {
            await ShoppingList.create({
              creation_date: shopping_list.creation_date,
              is_custom: shopping_list.is_custom,
              is_complete: shopping_list.is_complete,
            });
        } catch (error) {
             throw new Error("Failed to create shopping_list!");
        }
    }

    async update(shopping_list: ShoppingList): Promise<void> {
        try {
          const new_shopping_list = await ShoppingList.findOne({
            where: {
                shopping_list_id: shopping_list.id,
            },
          });
          if (!new_shopping_list) {
            throw new Error("ShoppingList not found!");
          }
          
          new_shopping_list.creation_date = shopping_list.creation_date,
          new_shopping_list.is_custom = shopping_list.is_custom,
          new_shopping_list.is_complete = shopping_list.is_complete,


          await new_shopping_list.save();
        } catch (error) {
            console.log(error)
          throw new Error("Failed to update shopping_list!");
        }
      }
    
    async delete(shopping_listId: number): Promise<void> {
        try {
          const new_shopping_list = await ShoppingList.findOne({
            where: {
                shopping_list_id: shopping_listId,
            },
          });
          if (!new_shopping_list) {
            throw new Error("ShoppingList not found!");
          }
    
          await new_shopping_list.destroy();
        } catch (error) {
          throw new Error("Failed to delete shopping_list!");
        }
      }
    
    async retrieveById(shopping_listId: number): Promise<ShoppingList> {
        try {
          const new_shopping_list = await ShoppingList.findOne({
            where: {
                shopping_list_id: shopping_listId,
            },
          });
          if (!new_shopping_list) {
            throw new Error("ShoppingLists not found!");
          }
          return new_shopping_list;
        } catch (error) {
          throw new Error("Failed to retrieve shopping_lists!");
        }
      }
      
    async retrieveAll(): Promise<ShoppingList[]> {
        try {
         return await ShoppingList.findAll();
        } catch (error) {
          throw new Error("Failed to retrieve shopping_list!");
        }
      }
}
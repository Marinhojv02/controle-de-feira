import { ShoppingList } from "../model/ShoppingList.Model";
import { ShoppingListsRepo } from "../repository/ShoppingListRepo";

class ShoppingListUsecase{
    async create(shopping_list_info:{user_id:number, is_custom:boolean, is_complete:boolean}){
        const new_shopping_list = new ShoppingList();
        new_shopping_list.user_id = shopping_list_info.user_id
        new_shopping_list.is_custom = shopping_list_info.is_custom
        new_shopping_list.is_complete = shopping_list_info.is_complete  
        new_shopping_list.creation_date = new Date();
  
        return await new ShoppingListsRepo().save(new_shopping_list);
    }
    async delete(id:number):Promise<void>{
      return await new ShoppingListsRepo().delete(id);
    }

    async findById(id:number){
      return await new ShoppingListsRepo().retrieveById(id);
    }
    async findAll(){
      return await new ShoppingListsRepo().retrieveAll();
    }
    async updateShoppingList(id:number, user_id:number, is_custom:boolean, is_complete:boolean, is_active:boolean){
        const new_shopping_list = new ShoppingList();

        new_shopping_list.id = id;
        new_shopping_list.user_id = user_id
        new_shopping_list.is_custom = is_custom
        new_shopping_list.is_complete = is_complete
        new_shopping_list.is_complete = is_active
   
        return await new ShoppingListsRepo().update(new_shopping_list);
    }
}
export default new ShoppingListUsecase();
import { ShoppingList } from "../model/ShoppingList.Model";
import { ShoppingListsRepo } from "../repository/ShoppingListRepo";
import { ShoppingListItemsRepo } from '../repository/ShoppingListItemRepo';
import { HouseProductsRepo } from '../repository/HouseProductRepo';
import { HouseProduct } from "../model/HouseProduct.Model";
import { ShoppingListItem } from "../model/ShoppingListItem.Model";

class ShoppingListUsecase{
    async create(shopping_list_info:{house_id:number, is_custom:boolean, is_complete:boolean}){
        const new_shopping_list = new ShoppingList();
        new_shopping_list.house_id = shopping_list_info.house_id
        new_shopping_list.is_custom = shopping_list_info.is_custom
        new_shopping_list.is_complete = shopping_list_info.is_complete
        new_shopping_list.creation_date = new Date();
  
        return await new ShoppingListsRepo().save(new_shopping_list);
    }

    async generateDefaultShoppingList(house_id:number, shopping_list:ShoppingList){
        const houseProducts = await new HouseProductsRepo().retrieveByHouseId(house_id)
        let shopping_list_item:ShoppingListItem[] = []
        houseProducts.forEach((product:HouseProduct) => {
            if (product.quantity_in_stock >= product.reorder_point) return;

            const new_shopping_list_item = new ShoppingListItem();
            new_shopping_list_item.shopping_list_id = shopping_list.shopping_list_id;
            new_shopping_list_item.house_product_id = product.house_product_id;
            new_shopping_list_item.quantity = product.recommended_quantity - product.quantity_in_stock;
            
            shopping_list_item.push(new_shopping_list_item);
        });

        if(shopping_list_item.length === 0){
            return [];
        }
        return await new ShoppingListItemsRepo().saveBulk(shopping_list_item)
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
    async updateShoppingList(id:number, house_id:number, is_custom:boolean, is_complete:boolean, is_active:boolean){
        const new_shopping_list = new ShoppingList();

        new_shopping_list.id = id;
        new_shopping_list.house_id = house_id
        new_shopping_list.is_custom = is_custom
        new_shopping_list.is_complete = is_complete
        new_shopping_list.is_complete = is_active
   
        return await new ShoppingListsRepo().update(new_shopping_list);
    }
}
export default new ShoppingListUsecase();
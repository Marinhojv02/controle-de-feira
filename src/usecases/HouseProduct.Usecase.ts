import { HouseProductsRepo } from "../repository/HouseProductRepo";
import { HouseProduct } from "../model/HouseProduct.Model";

class HouseProductUsecase{
    async create(){
        
    }
    async delete(){
        
    }
    async findById(id: number){
        
    }
    async findAll(){
      return await new HouseProductsRepo().retrieveAll();
    }
    async update(id:number, product_id:number, house_id:number, quantity_in_stock:number, reorder_point:number, recommended_quantity:number){
        const new_houseProduct = new HouseProduct();

        new_houseProduct.id = id;
        new_houseProduct.product_id = product_id
        new_houseProduct.house_id = house_id
        new_houseProduct.quantity_in_stock = quantity_in_stock
        new_houseProduct.reorder_point = reorder_point
        new_houseProduct.recommended_quantity = recommended_quantity

        return await new HouseProductsRepo().update(new_houseProduct);
    }
    async getLowStock(id: number){
        return await new HouseProductsRepo().retrieveLowStock(id);
    }
}

export default new HouseProductUsecase()
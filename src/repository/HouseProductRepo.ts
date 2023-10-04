import { Op, Sequelize } from "sequelize";
import { HouseProduct } from "../model/HouseProduct.Model";

interface IHouseProducts {
    save(houseProduct: HouseProduct): Promise<void>;
    saveBulk(houseProducts: HouseProduct[]): Promise<void>;
    update(houseProduct: HouseProduct): Promise<void>;
    updateBulk(houseProduct: HouseProduct[]): Promise<void>;
    delete(houseProductId: number): Promise<void>;
    deleteBulk(houseProductId: number[]): Promise<void>;
    retrieveById(houseProductId: number): Promise<HouseProduct>;
    retrieveByHouseId(houseProduct: HouseProduct): Promise<HouseProduct[]>;
    retrieveAll(): Promise<HouseProduct[]>;
    retrieveLowStock(houseId: number): Promise<HouseProduct[]>;
}

export class HouseProductsRepo implements IHouseProducts {
    updateBulk(houseProduct: HouseProduct[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    deleteBulk(houseProductId: number[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async save(houseProduct: HouseProduct): Promise<void> {
      try {
          await HouseProduct.create({
              houseProduct_id: houseProduct.product_id,
              house_id: houseProduct.house_id,
              quantity_in_stock: houseProduct.quantity_in_stock,
              reorder_point: houseProduct.reorder_point,
              recomended_quantity: houseProduct.recommended_quantity,
          });
      } catch (error) {
            throw new Error("Failed to create houseProduct!");
      }
    }

    async saveBulk(houseProducts: HouseProduct[]): Promise<void> {
        try {
            const houseProductsData = houseProducts.map((item) => ({
                houseProduct_id: item.product_id,
                house_id: item.house_id,
                quantity_in_stock: item.quantity_in_stock,
                reorder_point: item.reorder_point,
                recomended_quantity: item.recommended_quantity,
            }))

            await HouseProduct.bulkCreate(houseProductsData);
        } catch (error) {
            throw new Error("Failed to create userHouses!");
        }
    }
    
    async update(houseProduct: HouseProduct): Promise<void> {
      try {
        const new_houseProduct = await HouseProduct.findOne({
          where: {
              house_id: houseProduct.house_id,
              houseProduct_id: houseProduct.product_id,
          },
        });
        if (!new_houseProduct) {
          throw new Error("HouseProduct not found!");
        }
        
        new_houseProduct.quantity_in_stock = houseProduct.quantity_in_stock,
        new_houseProduct.reorder_point = houseProduct.reorder_point,
        new_houseProduct.recommended_quantity = houseProduct.recommended_quantity,

        await new_houseProduct.save();
      } catch (error) {
          console.log(error)
        throw new Error("Failed to update houseProduct!");
      }
    }
    
    async delete(houseProductId: number): Promise<void> {
      try {
        const new_houseProduct = await HouseProduct.findOne({
          where: {
            house_product_id: houseProductId,
          },
        });
        if (!new_houseProduct) {
          throw new Error("HouseProduct not found!");
        }
  
        await new_houseProduct.destroy();
      } catch (error) {
        throw new Error("Failed to delete houseProduct!");
      }
    }

    async retrieveById(houseProductId: number): Promise<HouseProduct> {
        try {
          const new_houseProduct = await HouseProduct.findOne({
            where: {
                house_product_id: houseProductId,
            },
          });
          if (!new_houseProduct) {
              throw new Error("HouseProducts not found!");
            }
          return new_houseProduct;
        } catch (error) {
            throw new Error("Failed to retrieve houseProducts!");
        }
    }   
    
    async retrieveByHouseId(houseProduct: HouseProduct): Promise<HouseProduct[]> {
        try {
            const new_houseProduct = await HouseProduct.findAll({
          where: {
                house_id: houseProduct.house_id,
            },
        });
        if (!new_houseProduct) {
            throw new Error("HouseProducts not found!");
        }
        return new_houseProduct;
      } catch (error) {
        throw new Error("Failed to retrieve houseProducts!");
      }
    }
    
    async retrieveAll(): Promise<HouseProduct[]> {
        try {
            return await HouseProduct.findAll();
      } catch (error) {
          throw new Error("Failed to retrieve houseProduct!");
        }
    }
    
    async retrieveLowStock(houseId: number): Promise<HouseProduct[]> {
        try {
          const houseProducts = await HouseProduct.findAll({
            where: {
              house_id: houseId,
              quantity_in_stock: {
                [Op.lte]: Sequelize.col('reorder_point'),
              },
            },
          });
      
          if (!houseProducts) {
            throw new Error("HouseProduct not found!");
          }
      
          return houseProducts;
        } catch (error) {
          console.log(error);
          throw new Error("Failed to retrieve low stock products!");
        }
    }
}
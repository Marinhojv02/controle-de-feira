import { Op, Sequelize } from "sequelize";
import { ProductBuy } from "../model/ProductBuy.Model";

interface IProductBuysBuy {
    save(product: ProductBuy): Promise<void>;
    saveMany(product: ProductBuy[]): Promise<ProductBuy[]>;
    update(product: ProductBuy): Promise<void>;
    // delete(productId: number): Promise<void>;
    // bulkDelete(productId: number[]): Promise<void>;
    retrieveById(productId: number): Promise<ProductBuy>;
    retrieveAll(): Promise<ProductBuy[]>;
}

export class ProductBuyBuyRepo implements IProductBuysBuy {
    
    async save(product: ProductBuy): Promise<void> {
        try {
            await ProductBuy.create({
                product_id: product.product_id,
                price: product.price,
                quantity: product.quantity,
                purchase_date: product.purchase_date,
            });
        } catch (error) {
            throw new Error("Failed to create product!");
        }
    }
    
    async saveMany(products: ProductBuy[]): Promise<ProductBuy[]> {
        try{
            const productsData = products.map((product) => ({
                product_id: product.product_id,
                price: product.price,
                quantity: product.quantity,
                purchase_date: product.purchase_date,
            }));
          
            return await ProductBuy.bulkCreate(productsData);
        }catch(error){
            throw new Error("Failed to create product")
        }
    }

    async update(product: ProductBuy): Promise<void> {
      try {
        const new_product = await ProductBuy.findOne({
          where: {
              product_id: product.id,
          },
        });
        if (!new_product) {
          throw new Error("ProductBuy not found!");
        }
        
        new_product.product_id = product.product_id,
        new_product.price = product.price,
        new_product.quantity = product.quantity,
        new_product.purchase_date = product.purchase_date,

        await new_product.save();
      } catch (error) {
          console.log(error)
        throw new Error("Failed to update product!");
      }
    }
    
    // async delete(productId: number): Promise<void> {
    //   try {
    //     const new_product = await ProductBuy.findOne({
    //       where: {
    //           product_id: productId,
    //       },
    //     });
    //     if (!new_product) {
    //       throw new Error("ProductBuy not found!");
    //     }
  
    //     await new_product.destroy();
    //   } catch (error) {
    //     throw new Error("Failed to delete product!");
    //   }
    // }

    // async bulkDelete(productId: number[]): Promise<void>{
    //     try{
    //         const products = await ProductBuy.findAll({
    //             where:{
                    
    //             }
    //         });
    //     }catch(error){
    //         throw new Error("Failed to delete procuts!")
    //     }
    // }

    
    async retrieveById(productId: number): Promise<ProductBuy> {
      try {
        const new_product = await ProductBuy.findOne({
          where: {
              product_id: productId,
          },
        });
        if (!new_product) {
          throw new Error("ProductBuys not found!");
        }
        return new_product;
      } catch (error) {
        throw new Error("Failed to retrieve products!");
      }
    }
    
    async retrieveAll(): Promise<ProductBuy[]> {
      try {
        return await ProductBuy.findAll();
      } catch (error) {
        throw new Error("Failed to retrieve product!");
      }
    }
    
}
import { Op, Sequelize } from "sequelize";
import { Product } from "../model/Product.Model";

interface IProducts {
    save(product: Product): Promise<void>;
    update(product: Product): Promise<void>;
    delete(productId: number): Promise<void>;
    retrieveById(productId: number): Promise<Product>;
    retrieveAll(): Promise<Product[]>;
}

export class ProductsRepo implements IProducts {
    
    async save(product: Product): Promise<void> {
      try {
          await Product.create({
              product_name: product.product_name,
              description: product.description,
              category: product.category,
          });
      } catch (error) {
            throw new Error("Failed to create product!");
      }
    }

    async update(product: Product): Promise<void> {
      try {
        const new_product = await Product.findOne({
          where: {
              product_id: product.id,
          },
        });
        if (!new_product) {
          throw new Error("Product not found!");
        }
        
        new_product.product_name = product.product_name,
        new_product.description = product.description,
        new_product.category = product.category,

        await new_product.save();
      } catch (error) {
          console.log(error)
        throw new Error("Failed to update product!");
      }
    }
    
    async delete(productId: number): Promise<void> {
      try {
        const new_product = await Product.findOne({
          where: {
              product_id: productId,
          },
        });
        if (!new_product) {
          throw new Error("Product not found!");
        }
  
        await new_product.destroy();
      } catch (error) {
        throw new Error("Failed to delete product!");
      }
    }
    
    async retrieveById(productId: number): Promise<Product> {
      try {
        const new_product = await Product.findOne({
          where: {
              product_id: productId,
          },
        });
        if (!new_product) {
          throw new Error("Products not found!");
        }
        return new_product;
      } catch (error) {
        throw new Error("Failed to retrieve products!");
      }
    }
    
    async retrieveAll(): Promise<Product[]> {
      try {
        return await Product.findAll();
      } catch (error) {
        throw new Error("Failed to retrieve product!");
      }
    }    
}
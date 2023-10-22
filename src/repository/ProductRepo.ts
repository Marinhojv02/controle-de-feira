import { Op, Sequelize } from "sequelize";
import { Product } from "../model/Product.Model";

interface IProducts {
    save(product: Product): Promise<Product>;
    update(product: Product): Promise<Product>;
    delete(productId: number): Promise<void>;
    retrieveById(productId: number): Promise<Product>;
    retrieveByNameAndCategory(productName: string, productCategory: string): Promise<Product | null>;
    retrieveAll(): Promise<Product[]>;
    retrieveByName(productName: string): Promise<Product>;
}

export class ProductsRepo implements IProducts {

    async save(product: Product): Promise<Product> {
        try {
            console.log(JSON.stringify(product))
            return await Product.create({
                product_name: product.product_name,
                category: product.category,
            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to create product!");
        }
    }

    async update(product: Product): Promise<Product> {
        try {
            const new_product = await Product.findOne({
                where: {
                    product_id: product.id,
                },
            });
            if (!new_product) {
                throw new Error("Product not found!");
            }

            new_product.product_name = product.product_name
            new_product.category = product.category
            return await new_product.save();
        } catch (error) {
            console.log(error);
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

    async retrieveByNameAndCategory(productName: string, productCategory: string): Promise<Product | null>{
        try {
            const new_product = await Product.findOne({
                where: {
                    product_name: productName,
                    category: productCategory,
                },
            });
            if (!new_product) {
                return null;
            }
            return new_product;
        } catch (error) {
            console.log(error)
            throw new Error("Failed to retrieve products!");
        }
    }

    async retrieveByName(productName: string): Promise<Product> {
        try {
            const new_product = await Product.findOne({
                where: {
                    product_name: productName,
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

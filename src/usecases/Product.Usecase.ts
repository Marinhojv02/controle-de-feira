import { Product } from "../model/Product.Model";
import { ProductsRepo } from "../repository/ProductRepo";
import { HouseProductsRepo } from "../repository/HouseProductRepo";
import { HouseProduct } from "../model/HouseProduct.Model";

class ProductUsecase {
    async create(product_info: { product_name: string, category: string, quantity_in_stock: number, reorder_point: number, recommended_quantity: number, house_id: number }) {
        let product = await new ProductsRepo().retrieveByNameAndCategory(product_info.product_name, product_info.category);

        if (!product) {
            product = new Product();
            product.product_name = product_info.product_name;
            product.category = product_info.category;

            product = await new ProductsRepo().save(product);
        }

        let product_house = await new HouseProductsRepo().retrieveByHouseAndProductId(product_info.house_id, product.product_id)

        if (product_house) {
            console.log(JSON.stringify(product))
            console.log(JSON.stringify(product_house))
            throw new Error("Product already exists");
        }

        product_house = new HouseProduct()
        product_house.house_id = product_info.house_id
        product_house.product_id = product.product_id
        product_house.quantity_in_stock = product_info.quantity_in_stock
        product_house.reorder_point = product_info.reorder_point
        product_house.recommended_quantity = product_info.recommended_quantity

        await new HouseProductsRepo().save(product_house)
    }

    async findById(id: number) {
        return await new ProductsRepo().retrieveById(id);
    }

    async findByName(productName: string) {
        return await new ProductsRepo().retrieveByName(productName);
    }

    async findAll() {
        return await new ProductsRepo().retrieveAll();
    }

    async update(id: number, product_name: string, description: string, category: string) {
        const new_product = new Product();

        new_product.id = id;
        new_product.product_name = product_name;
        new_product.category = category;

        return await new ProductsRepo().update(new_product);
    }
}

export default new ProductUsecase();

import { Product } from "../model/Product.Model";
import { ProductsRepo } from "../repository/ProductRepo";

class ProductUsecase {
  async create(product_info:{product_name:string, description:string, category:string}) {
    const new_product = new Product();
    new_product.product_name = product_info.product_name;
    new_product.description = product_info.description;
    new_product.category = product_info.category;

    await new ProductsRepo().save(new_product);
  }
  async findById(id:number) {
    return await new ProductsRepo().retrieveById(id);
  }
  async findByName(productName:string) {
    return await new ProductsRepo().retrieveByName(productName);
  }
  async findAll() {
    return await new ProductsRepo().retrieveAll();
  }
  async update(id:number, product_name:string, description:string, category:string) {
    const new_product = new Product();

      new_product.id = id;
      new_product.product_name = product_name;
      new_product.description = description;
      new_product.category = category;

      return await new ProductsRepo().update(new_product);
  }
}

export default new ProductUsecase();

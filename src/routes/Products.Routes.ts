import BaseRoutes from "./base/BaseRouter";
import { createProductSchema, updateProductSchema } from "../schema/Product.Schema";
import ProductController from "../controllers/Product.Controller";
import validate from "../helper/validate";

class ProductRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", validate(createProductSchema), ProductController.create);
    this.router.patch(
      "/:id",
      validate(updateProductSchema),
      ProductController.update
    );
    // this.router.delete("/:id", ProductController.delete);
    this.router.get("", ProductController.findAll);
    this.router.get("/:id(\\d+)", ProductController.findById);
  }
}

export default new ProductRoutes().router
import BaseRoutes from "./base/BaseRouter";
import { createUserSchema, updateUserSchema } from "../schema/User.Schema";
import ShoppingListController from "../controllers/ShoppingList.Controller";
import validate from "../helper/validate";

class ShoppingListRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", ShoppingListController.create);
    this.router.patch("/:id", ShoppingListController.updateShoppingList);
    this.router.delete("/:id", ShoppingListController.delete);
    this.router.get("", ShoppingListController.findAll);
    this.router.get("/:id", ShoppingListController.findById);
  }
}

export default new ShoppingListRoutes().router
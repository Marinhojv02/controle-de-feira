import BaseRoutes from "./base/BaseRouter";
import { createUserSchema, updateUserSchema } from "../schema/User.Schema";
import ShoppingListController from "../controllers/ShoppingList.Controller";
import validate from "../helper/validate";

class ShoppingListRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get("", ShoppingListController.findAll);
    this.router.post("/generate", ShoppingListController.create);
    this.router.get("/house/:id", ShoppingListController.findByHouseId);
    this.router.patch("/:id", ShoppingListController.updateShoppingList);
    this.router.get("/:id", ShoppingListController.findById);
    this.router.delete("/:id", ShoppingListController.delete);
  }
}

export default new ShoppingListRoutes().router
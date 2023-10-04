import BaseRoutes from "./base/BaseRouter";
import { createUserSchema, updateUserSchema } from "../schema/User.Schema";
import UserController from "../controllers/Users.Controller";
import validate from "../helper/validate";

class NoteRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", validate(createUserSchema), UserController.create);
    this.router.patch(
      "/:id",
      validate(updateUserSchema),
      UserController.update
    );
    this.router.delete("/:id", UserController.delete);
    this.router.get("", UserController.findAll);
    this.router.get("/:id", UserController.findById);
  }
}

export default new NoteRoutes().router
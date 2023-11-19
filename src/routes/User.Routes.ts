import BaseRoutes from "./base/BaseRouter";
import { createUserSchema, updateUserSchema, loginUserSchema } from "../schema/User.Schema";
import UserController from "../controllers/Users.Controller";
import validate from "../helper/validate";

class NoteRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", validate(createUserSchema), UserController.create);
    this.router.post("/login", validate(loginUserSchema), UserController.login);
    this.router.patch(
      "/:id",
      validate(updateUserSchema),
      UserController.update
    );
    this.router.get("", UserController.findAll);
    this.router.get("/:id", UserController.findById);
  }
}

export default new NoteRoutes().router
import BaseRoutes from "./base/BaseRouter";
import { createHouseSchema, updateHouseSchema } from "../schema/House.Schema";
import HouseController from "../controllers/House.Controller";
import validate from "../helper/validate";

class HouseRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", validate(createHouseSchema), HouseController.create);
    this.router.patch("/:id(\\d+)", validate(updateHouseSchema), HouseController.update);
    this.router.delete("/:id(\\d+)", HouseController.delete);
    this.router.get("", HouseController.findAll);
    this.router.get("/:id(\\d+)", HouseController.findById);
  }
}

export default new HouseRoutes().router
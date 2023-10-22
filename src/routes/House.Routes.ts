import BaseRoutes from "./base/BaseRouter";
import { createHouseSchema, updateHouseSchema } from "../schema/House.Schema";
import HouseController from "../controllers/House.Controller";
import UserHouseController from "../controllers/UserHouse.Controller";
import validate from "../helper/validate";

class HouseRoutes extends BaseRoutes {
  public routes(): void {
    //create houses
    this.router.post("/create", validate(createHouseSchema), HouseController.create);
    //add user to house
    this.router.post("/user", UserHouseController.addUserToHouse);
    //find all houses of an user
    this.router.get("/user/:id(\\d+)", UserHouseController.findByUserId);
    //update house
    this.router.patch("/:id(\\d+)", validate(updateHouseSchema), HouseController.update);
    //find all houses
    this.router.get("", HouseController.findAll);
    //find house by ID
    this.router.get("/:id(\\d+)", HouseController.findById);
  }
}

export default new HouseRoutes().router
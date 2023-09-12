import { Request, Response } from "express";
import { HousesRepo } from "../repository/HouseRepo";
import { House } from "../model/House.Model";
import { UserHouse } from "../model/UserHouse.Model";
import { UserHousesRepo } from "../repository/UserHouseRepo";

class HouseController {
  async create(req: Request, res: Response) {
    try {
        if(!req.body.house_residents){
          res.status(400).json({
              status: "Error",
              message: "Cant create empty house!",
            });
        }

      const new_house = new House();
      new_house.house_name = req.body.house_name

      const created_house = await new HousesRepo().save(new_house);

      const houseResidents = req.body.shopping_list_items.map((item_info: { user_id:number }) => {
        const new_user_house = new UserHouse();
        new_user_house.user_id = item_info.user_id
        new_user_house.house_id = created_house.house_id

        return new_user_house;
      });

      await new UserHousesRepo().saveBulk(houseResidents);
    
      res.status(201).json({
        status: "Created!",
        message: "Successfully created house!",
      });
    } catch (err) {
        console.log(err)
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      await new HousesRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted house!",
      });
    } catch (err) {
        console.log(err)
        res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const new_house = await new HousesRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched house by id!",
        data: new_house,
      });
    } catch (err) {
        console.log(err)
        res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_house = await new HousesRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all house data!",
        data: new_house,
      });
    } catch (err) {
        console.log(err)
        res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const new_house = new House();

      new_house.id = id;
      new_house.house_name = req.body.house_name

      await new HousesRepo().update(new_house);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated house data!",
      });
    } catch (err) {
        console.log(err)
        res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new HouseController()
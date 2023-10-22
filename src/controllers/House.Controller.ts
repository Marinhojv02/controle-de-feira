import { Request, Response } from "express";
import { HousesRepo } from "../repository/HouseRepo";
import { House } from "../model/House.Model";
import HouseUsecase from "../usecases/House.Usecase";
import UserHouseUsecase from "../usecases/UserHouse.Usecase";

class HouseController {
    async create(req: Request, res: Response) {
        try {
            if (!req.body.house_residents) {
                res.status(400).json({
                    status: "Error",
                    message: "Cant create empty house!",
                });
            }

            const created_house = await HouseUsecase.create(req.body.house_name);

            const houseResidents = req.body.house_residents.map((item_info: { user_id: number }) => ({
                user_id: item_info.user_id,
                house_id: created_house.house_id,
            }));

            await UserHouseUsecase.createBulk(houseResidents);

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

    async findById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const new_house = await HouseUsecase.findById(id);
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
            const new_house = await HouseUsecase.findAll();
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
            await HouseUsecase.update(id, req.body.house_name)
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
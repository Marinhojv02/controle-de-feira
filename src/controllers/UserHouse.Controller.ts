import { Request, Response } from "express";
import UserHouseUsecase from "../usecases/UserHouse.Usecase";
import HouseUsecase from "../usecases/House.Usecase";

class UserHouseController {
    async create(req: Request, res: Response) {
        try {
            await UserHouseUsecase.create(
                req.body.user_id, req.body.house_id,
            );

            res.status(201).json({
                status: "Created!",
                message: "Successfully created product!",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async addUserToHouse(req: Request, res: Response) {
        try {
            await UserHouseUsecase.addUserToHouse(
                req.body.username, req.body.house_id,
            );

            res.status(201).json({
                status: "Created!",
                message: "Successfully add user to house!",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const new_product = await UserHouseUsecase.findById(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched product by id!",
                data: new_product,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async findByUserId(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const new_product = await UserHouseUsecase.findByUserId(id);


            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched product by id!",
                data: new_product,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async findByHouseId(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const new_product = await UserHouseUsecase.findByHouseId(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched product by id!",
                data: new_product,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const new_product = await UserHouseUsecase.findAll();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all product data!",
                data: new_product,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new UserHouseController();
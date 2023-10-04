import { Request, Response } from "express";
import { UserHouseUsecase } from "../usecases/UserHouse.Usecase";

class UserHouseController {
  async create(req: Request, res: Response) {
    try {
      await new UserHouseUsecase().create(
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

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      await new UserHouseUsecase().delete(id)

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted product!",
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
      const new_product = await new UserHouseUsecase().findById(id);

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
      const new_product = await new UserHouseUsecase().findByUserId(id);

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
      const new_product = await new UserHouseUsecase().findByHouseId(id);

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
      const new_product = await new UserHouseUsecase().findAll();

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

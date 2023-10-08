import { Request, Response } from "express";
import { UserUsecases } from "../usecases/Users.Usecase";

class UserController {
  async create(req: Request, res: Response) {
    try {
      await new UserUsecases().createUser(
        req.body.name,
        req.body.username,
        req.body.password,
        req.body.email,
      );

      res.status(201).json({
        status: "Created!",
        message: "Successfully created user!",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const token = await new UserUsecases().login(
        req.body.username, req.body.password
        );
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while registering user" });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
        const new_user = await new UserUsecases().findById(id)
      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched user by id!",
        data: new_user,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findByUsername(req: Request, res: Response) {
    try {
      const username = req.body.username;
      const new_user = await new UserUsecases().findByUsername(username)
      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched user by username!",
        data: new_user,
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
        const new_user = await new UserUsecases().findAll()
      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all user data!",
        data: new_user,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      await new UserUsecases().update(id, req.body.name, req.body.username, req.body.password, req.body.email, req.body.type)

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated user data!",
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

export default new UserController();

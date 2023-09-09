import { Request, Response } from "express";
import { UsersRepo } from "../repository/UsersRepo";
import { User } from "../model/Users.Model";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const new_user = new User();
      new_user.name = req.body.name;
      new_user.username = req.body.username,
      new_user.password = req.body.password,
      new_user.email = req.body.email,
      new_user.type = req.body.type,
      new_user.created_date = new Date(),

      await new UsersRepo().save(new_user);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created user!",
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
      let id = parseInt(req.params["id"]);
      await new UsersRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted user!",
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
      let id = parseInt(req.params["id"]);
      const new_user = await new UsersRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched user by id!",
        data: new_user,
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
      const new_user = await new UsersRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all user data!",
        data: new_user,
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
      let id = parseInt(req.params["id"]);
      const new_user = new User();

      new_user.id = id;
      new_user.name = req.body.name;
      new_user.username = req.body.username,
      new_user.password = req.body.password,
      new_user.email = req.body.email,
      new_user.type = req.body.type,

      await new UsersRepo().update(new_user);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated user data!",
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

export default new UserController()
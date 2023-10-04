import { Request, Response } from "express";
import { ProductsRepo } from "../repository/ProductRepo";
import { Product } from "../model/Product.Model";
import ProductUsecase from "../usecases/Product.Usecase";

class ProductController {
  async create(req: Request, res: Response) {
    try {
      await ProductUsecase.create(req.body);
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

  async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const new_product = await ProductUsecase.findById(id);

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

  async findByName(req: Request, res: Response) {
    try {
    const new_product = await ProductUsecase.findByName(req.body.productName);

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
      const new_product = await ProductUsecase.findAll();

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

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      await ProductUsecase.update(id, req.body.product_name, req.body.description, req.body.category);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated product data!",
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

export default new ProductController();

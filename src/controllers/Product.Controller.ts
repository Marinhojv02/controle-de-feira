import { Request, Response } from "express";
import { ProductsRepo } from "../repository/ProductRepo";
import { Product } from "../model/Product.Model";

class ProductController {
  async create(req: Request, res: Response) {
    try {
      const new_product = new Product();
      new_product.product_name = req.body.product_name
      new_product.description = req.body.description
      new_product.category = req.body.category
      new_product.quantity_in_stock = req.body.quantity_in_stock
      new_product.reorder_point = req.body.reorder_point

      await new ProductsRepo().save(new_product);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created product!",
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
      await new ProductsRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted product!",
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
      const new_product = await new ProductsRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched product by id!",
        data: new_product,
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
      const new_product = await new ProductsRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all product data!",
        data: new_product,
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
      const new_product = new Product();

      new_product.id = id;
      new_product.product_name = req.body.product_name
      new_product.description = req.body.description
      new_product.category = req.body.category
      new_product.quantity_in_stock = req.body.quantity_in_stock
      new_product.reorder_point = req.body.reorder_point

      await new ProductsRepo().update(new_product);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated product data!",
      });
    } catch (err) {
        console.log(err)
        res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async getLowStock(req: Request, res: Response) {
    try {
      await new ProductsRepo().retrieveLowStock();
      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated product data!",
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

export default new ProductController()
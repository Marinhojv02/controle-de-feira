import { Request, Response } from "express";
import { HouseProductsRepo } from "../repository/HouseProductRepo";
import { HouseProduct } from "../model/HouseProduct.Model";

class HouseProductController {
  async create(req: Request, res: Response) {
    try {
      const new_houseProduct = new HouseProduct();
      
      new_houseProduct.product_id = req.body.product_id;
      new_houseProduct.house_id = req.body.house_id;
      new_houseProduct.quantity_in_stock = req.body.quantity_in_stock;   
      new_houseProduct.reorder_point = req.body.reorder_point;
      new_houseProduct.recommended_quantity = req.body.recommended_quantity;    

      await new HouseProductsRepo().save(new_houseProduct);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created houseProduct!",
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
      await new HouseProductsRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted houseProduct!",
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
      const new_houseProduct = await new HouseProductsRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched houseProduct by id!",
        data: new_houseProduct,
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
      const new_houseProduct = await new HouseProductsRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all houseProduct data!",
        data: new_houseProduct,
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
      const new_houseProduct = new HouseProduct();

      new_houseProduct.id = id;
      new_houseProduct.product_id = req.body.product_id
      new_houseProduct.house_id = req.body.house_id
      new_houseProduct.quantity_in_stock = req.body.quantity_in_stock
      new_houseProduct.reorder_point = req.body.reorder_point
      new_houseProduct.recommended_quantity = req.body.recommended_quantity

      await new HouseProductsRepo().update(new_houseProduct);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated houseProduct data!",
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
      const id = parseInt(req.params["id"]);
      const lowStockProducts = await new HouseProductsRepo().retrieveLowStock(id);
      
      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched houseProduct low stock products!",
        data:lowStockProducts
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

export default new HouseProductController()
import { Request, Response } from "express";
import ShoppingListItemUsecase from "../usecases/ShoppingListItem.Usecase";
import ShoppingListUsecase from "../usecases/ShoppingList.Usecase";

class ShoppingListController {
  async create(req: Request, res: Response) {
    try {
      const savedShoppingList = await ShoppingListUsecase.create(req.body)

      if(!req.body.shopping_list_items){
        res.status(201).json({
          status: "Created!",
          message: "Successfully created empty shopping list!",
        });  
      }

      const shopping_list_items = await ShoppingListItemUsecase.saveBulk(req.body.shopping_list_items, savedShoppingList)

      res.status(201).json({
        status: "Created!",
        message: "Successfully created shoppig list!",
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
      await ShoppingListUsecase.delete(id); 
      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted shopping list!",
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
      const shopping_list = await ShoppingListUsecase.findById(id);
      const products = await ShoppingListItemUsecase.retrieveByShoppingListId(id)

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched shopping list by id!",
        shopping_list: shopping_list,  
        products: products,  
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
      const shopping_lists = await ShoppingListUsecase.findAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all shopping lists data!",
        data: shopping_lists,
      });
    } catch (err) {
        console.log(err)
        res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async updateShoppingList(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      await ShoppingListUsecase.updateShoppingList(id, req.body.shopping_list.user_id, req.body.shopping_list.is_custom, req.body.shopping_list.is_complete, req.body.shopping_list.is_active)

      if(!req.body.shopping_list_items){
        res.status(201).json({
          status: "Created!",
          message: "Successfully updated shopping list data!",
        });  
      }
      await ShoppingListItemUsecase.updateBulk(req.body.shopping_list_items);

      res.status(201).json({
        status: "Ok!",
        message: "Successfully updated shopping list and shopping list items data!",
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

export default new ShoppingListController()
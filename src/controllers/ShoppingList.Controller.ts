import { Request, Response } from "express";
import { ShoppingListItem } from "../model/ShoppingListItem.Model";
import { ShoppingListItemsRepo } from "../repository/ShoppingListItemRepo";
import { ShoppingListsRepo } from "../repository/ShoppingListRepo";
import { ShoppingList } from "../model/ShoppingList.Model";

class ShoppingListController {
  async create(req: Request, res: Response) {
    try {
      const new_shopping_list = new ShoppingList();
      new_shopping_list.user_id = req.body.shopping_list.user_id
      new_shopping_list.is_custom = req.body.shopping_list.is_custom
      new_shopping_list.is_complete = req.body.shopping_list.is_complete
      new_shopping_list.creation_date = new Date();
      
      await new ShoppingListsRepo().save(new_shopping_list);

      if(!req.body.shopping_list_items){
        res.status(201).json({
          status: "Created!",
          message: "Successfully created empty shopping list!",
        });  
      }

      const shoppingListItems = req.body.shopping_list_items.map((item_info: { shopping_list_id: number; product_id: number; quantity: number; }) => {
        const new_item = new ShoppingListItem();
        new_item.shopping_list_id = item_info.shopping_list_id;
        new_item.product_id = item_info.product_id;
        new_item.quantity = item_info.quantity;
        return new_item;
      });

      await new ShoppingListItemsRepo().saveBulk(shoppingListItems);

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
      let id = parseInt(req.params["id"]);
      await new ShoppingListsRepo().delete(id);

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

  async deleteItem(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new ShoppingListItemsRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted shopping list item!",
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
      const shopping_list = await new ShoppingListsRepo().retrieveById(id);
      const products = await new ShoppingListItemsRepo().retrieveByShoppingListId(id)

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
      const shopping_lists = await new ShoppingListsRepo().retrieveAll();

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
      let id = parseInt(req.params["id"]);
      const new_shopping_list = new ShoppingList();

      new_shopping_list.id = id;
      new_shopping_list.user_id = req.body.shopping_list.user_id
      new_shopping_list.is_custom = req.body.shopping_list.is_custom
      new_shopping_list.is_complete = req.body.shopping_list.is_complete
 

      await new ShoppingListsRepo().update(new_shopping_list);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated shopping list data!",
      });
    } catch (err) {
        console.log(err)
        res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async updateShoppingListItem(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_shopping_list_item = new ShoppingListItem();

      new_shopping_list_item.id = id;
      new_shopping_list_item.shopping_list_id = req.body.shopping_list.shopping_list_id
      new_shopping_list_item.product_id = req.body.shopping_list.product_id
      new_shopping_list_item.quantity = req.body.shopping_list.quantity

      await new ShoppingListItem().update(new_shopping_list_item);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated shopping list item data!",
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
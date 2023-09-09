import { Sequelize } from "sequelize-typescript";
import Config from "./config"
import * as dotenv from "dotenv";
import { User } from "../../model/Users.Model"
import { Product } from "../../model/Product.Model";
import { ProductBuy } from "../../model/ProductBuy.Model";
import { ShoppingList } from "../../model/ShoppingList.Model";
import { ShoppingListItem } from "../../model/ShoppingListItem.Model";
dotenv.config();


class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToPostgreSQL();
  }


  private async connectToPostgreSQL() {
    this.sequelize = new Sequelize({
      database:    Config.postgresql.POSTGRES_DB,
      username:    Config.postgresql.POSTGRES_USER,
      password:    Config.postgresql.POSTGRES_PASSWORD,
      host:    Config.postgresql.POSTGRES_HOST,
      port:    Config.postgresql.POSTGRES_PORT,
      dialect: "postgres",
      models:[User, Product, ProductBuy, ShoppingList, ShoppingListItem]
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log(
          "✅ PostgreSQL Connection has been established successfully."
        );
      })
      .catch((err) => {
        console.error("❌ Unable to connect to the PostgreSQL database:", err);
      });
  }
}

export default Database;
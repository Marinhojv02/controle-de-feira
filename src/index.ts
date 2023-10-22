import express, { Application, Request, Response } from "express";
import Database from "./utils/database";
//routers
import UserRoutes from "./routes/User.Routes";
import HouseRoutes from "./routes/House.Routes";
import ProductRoutes from "./routes/Products.Routes";
import ShoppingListRoutes from "./routes/ShoppingList.Routes";
import cors from "cors";


class App{
    public app:Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.plugins();
        this.routes();
      }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors({origin: "http://localhost:3000"}));
    }

    protected routes():void{
        this.app.route('/').get((req:Request, res:Response) => {
            res.send("Welcome home");
        })

        this.app.use("/user", UserRoutes);
        this.app.use("/product", ProductRoutes);
        this.app.use("/shopping_list", ShoppingListRoutes);
        this.app.use("/houses", HouseRoutes);
    }  

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
      }
}

const port:number = 5000;
const app = new App().app

app.listen(port, () => {
    console.log("Server started succesfully")
})
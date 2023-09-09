import express, { Application, Request, Response } from "express";
import Database from "./utils/config/database";
//routers
import UserRoutes from "./routes/User.Routes";

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
    }

    protected routes():void{
        this.app.route('/').get((req:Request, res:Response) => {
            res.send("Welcome home");
        })

        this.app.use("/user", UserRoutes);
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
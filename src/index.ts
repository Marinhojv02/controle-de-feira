import express, { Application, Request, Response } from "express";
import Database from "./utils/config/database";

class App{
    public app:Application;

    constructor(){
        this.app = express();
        this.routes();
        // this.databaseSync();
    }

    protected routes():void{
        this.app.route('/').get((req:Request, res:Response) => {
            res.send("Welcome home");
        })
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
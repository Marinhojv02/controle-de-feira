"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./utils/database"));
//routers
const User_Routes_1 = __importDefault(require("./routes/User.Routes"));
const House_Routes_1 = __importDefault(require("./routes/House.Routes"));
const Products_Routes_1 = __importDefault(require("./routes/Products.Routes"));
const ShoppingList_Routes_1 = __importDefault(require("./routes/ShoppingList.Routes"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send("Welcome home");
        });
        this.app.use("/user", User_Routes_1.default);
        this.app.use("/product", Products_Routes_1.default);
        this.app.use("/shopping-list", ShoppingList_Routes_1.default);
        this.app.use("/houses", House_Routes_1.default);
    }
    databaseSync() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
}
const port = 5000;
const app = new App().app;
app.listen(port, () => {
    console.log("Server started succesfully");
});

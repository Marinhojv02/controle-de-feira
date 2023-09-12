"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("./config"));
const dotenv = __importStar(require("dotenv"));
const Users_Model_1 = require("../../model/Users.Model");
const Product_Model_1 = require("../../model/Product.Model");
const ProductBuy_Model_1 = require("../../model/ProductBuy.Model");
const ShoppingList_Model_1 = require("../../model/ShoppingList.Model");
const ShoppingListItem_Model_1 = require("../../model/ShoppingListItem.Model");
const House_Model_1 = require("../../model/House.Model");
const HouseProduct_Model_1 = require("../../model/HouseProduct.Model");
dotenv.config();
class Database {
    constructor() {
        this.connectToPostgreSQL();
    }
    connectToPostgreSQL() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sequelize = new sequelize_typescript_1.Sequelize({
                database: config_1.default.postgresql.POSTGRES_DB,
                username: config_1.default.postgresql.POSTGRES_USER,
                password: config_1.default.postgresql.POSTGRES_PASSWORD,
                host: config_1.default.postgresql.POSTGRES_HOST,
                port: config_1.default.postgresql.POSTGRES_PORT,
                dialect: "postgres",
                models: [Users_Model_1.User, Product_Model_1.Product, ProductBuy_Model_1.ProductBuy, ShoppingList_Model_1.ShoppingList, ShoppingListItem_Model_1.ShoppingListItem, House_Model_1.House, HouseProduct_Model_1.HouseProduct]
            });
            yield this.sequelize
                .authenticate()
                .then(() => {
                console.log("✅ PostgreSQL Connection has been established successfully.");
            })
                .catch((err) => {
                console.error("❌ Unable to connect to the PostgreSQL database:", err);
            });
        });
    }
}
exports.default = Database;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBuy = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Product_Model_1 = require("./Product.Model");
let ProductBuy = class ProductBuy extends sequelize_typescript_1.Model {
};
exports.ProductBuy = ProductBuy;
ProductBuy.PURCHASE_ID = 'purchase_id';
ProductBuy.PRODUCT_ID = 'product_id';
ProductBuy.PRICE = 'price';
ProductBuy.QUANTITY = 'quantity';
ProductBuy.PURCHASE_DATE = 'purchase_date';
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: ProductBuy.PURCHASE_ID,
    }),
    __metadata("design:type", Number)
], ProductBuy.prototype, "purchase_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Product_Model_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: ProductBuy.PRODUCT_ID,
    }),
    __metadata("design:type", Number)
], ProductBuy.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        allowNull: false,
        field: ProductBuy.PRICE,
    }),
    __metadata("design:type", Number)
], ProductBuy.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        field: ProductBuy.QUANTITY,
    }),
    __metadata("design:type", Number)
], ProductBuy.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        field: ProductBuy.PURCHASE_DATE,
    }),
    __metadata("design:type", Date)
], ProductBuy.prototype, "purchase_date", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Product_Model_1.Product),
    __metadata("design:type", Product_Model_1.Product)
], ProductBuy.prototype, "product", void 0);
exports.ProductBuy = ProductBuy = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'ProductBuy',
    })
], ProductBuy);

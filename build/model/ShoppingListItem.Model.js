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
exports.ShoppingListItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const ShoppingList_Model_1 = require("./ShoppingList.Model");
const Product_Model_1 = require("./Product.Model");
let ShoppingListItem = class ShoppingListItem extends sequelize_typescript_1.Model {
};
exports.ShoppingListItem = ShoppingListItem;
ShoppingListItem.ITEM_ID = 'item_id';
ShoppingListItem.SHOPPING_LIST_ID = 'shopping_list_id';
ShoppingListItem.PRODUCT_ID = 'product_id';
ShoppingListItem.QUANTITY = 'quantity';
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: ShoppingListItem.ITEM_ID,
    }),
    __metadata("design:type", Number)
], ShoppingListItem.prototype, "item_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ShoppingList_Model_1.ShoppingList),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: ShoppingListItem.SHOPPING_LIST_ID,
    }),
    __metadata("design:type", Number)
], ShoppingListItem.prototype, "shopping_list_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Product_Model_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: ShoppingListItem.PRODUCT_ID,
    }),
    __metadata("design:type", Number)
], ShoppingListItem.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        field: ShoppingListItem.QUANTITY,
    }),
    __metadata("design:type", Number)
], ShoppingListItem.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ShoppingList_Model_1.ShoppingList),
    __metadata("design:type", ShoppingList_Model_1.ShoppingList)
], ShoppingListItem.prototype, "shoppingList", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Product_Model_1.Product),
    __metadata("design:type", Product_Model_1.Product)
], ShoppingListItem.prototype, "product", void 0);
exports.ShoppingListItem = ShoppingListItem = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'ShoppingListItem',
    })
], ShoppingListItem);

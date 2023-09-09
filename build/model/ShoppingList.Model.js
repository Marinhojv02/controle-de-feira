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
exports.ShoppingList = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Users_Model_1 = require("./Users.Model");
const ShoppingListItem_Model_1 = require("./ShoppingListItem.Model");
let ShoppingList = class ShoppingList extends sequelize_typescript_1.Model {
};
exports.ShoppingList = ShoppingList;
ShoppingList.SHOPPING_LIST_ID = 'shopping_list_id';
ShoppingList.USER_ID = 'user_id';
ShoppingList.CREATION_DATE = 'creation_date';
ShoppingList.IS_CUSTOM = 'is_custom';
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: ShoppingList.SHOPPING_LIST_ID,
    }),
    __metadata("design:type", Number)
], ShoppingList.prototype, "shopping_list_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Users_Model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: ShoppingList.USER_ID,
    }),
    __metadata("design:type", Number)
], ShoppingList.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        field: ShoppingList.CREATION_DATE,
    }),
    __metadata("design:type", Date)
], ShoppingList.prototype, "creation_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        field: ShoppingList.IS_CUSTOM,
    }),
    __metadata("design:type", Boolean)
], ShoppingList.prototype, "is_custom", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Users_Model_1.User),
    __metadata("design:type", Users_Model_1.User)
], ShoppingList.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ShoppingListItem_Model_1.ShoppingListItem),
    __metadata("design:type", Array)
], ShoppingList.prototype, "items", void 0);
exports.ShoppingList = ShoppingList = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'ShoppingList',
    })
], ShoppingList);

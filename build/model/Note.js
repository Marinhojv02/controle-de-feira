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
exports.Note = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Note = class Note extends sequelize_typescript_1.Model {
};
exports.Note = Note;
Note.NOTE_TABLE_NAME = "note";
Note.USER_ID = 'user_id';
Note.NAME = 'name';
Note.USERNAME = 'username';
Note.PASSWORD = 'password';
Note.EMAIL = 'email';
Note.TYPE = 'type';
Note.CREATED_DATE = 'created_date';
Note.LAST_LOGIN_DATE = 'last_login_date';
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Note.USER_ID,
    }),
    __metadata("design:type", Number)
], Note.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
        field: Note.NAME,
    }),
    __metadata("design:type", String)
], Note.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: Note.USERNAME,
    }),
    __metadata("design:type", String)
], Note.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: Note.PASSWORD,
    }),
    __metadata("design:type", String)
], Note.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: Note.EMAIL,
    }),
    __metadata("design:type", String)
], Note.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(50),
        field: Note.TYPE,
    }),
    __metadata("design:type", String)
], Note.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: Note.CREATED_DATE,
    }),
    __metadata("design:type", Date)
], Note.prototype, "created_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: Note.LAST_LOGIN_DATE,
    }),
    __metadata("design:type", Date)
], Note.prototype, "last_login_date", void 0);
exports.Note = Note = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Note.NOTE_TABLE_NAME,
    })
], Note);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const User_Schema_1 = require("../schema/User.Schema");
const Users_Controller_1 = __importDefault(require("../controllers/Users.Controller"));
const validate_1 = __importDefault(require("../helper/validate"));
class NoteRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("/register", (0, validate_1.default)(User_Schema_1.createUserSchema), Users_Controller_1.default.create);
        this.router.post("/login", (0, validate_1.default)(User_Schema_1.loginUserSchema), Users_Controller_1.default.login);
        this.router.patch("/:id", (0, validate_1.default)(User_Schema_1.updateUserSchema), Users_Controller_1.default.update);
        this.router.get("", Users_Controller_1.default.findAll);
        this.router.get("/:id", Users_Controller_1.default.findById);
    }
}
exports.default = new NoteRoutes().router;

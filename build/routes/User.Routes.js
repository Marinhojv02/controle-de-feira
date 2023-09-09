"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const User_Schema_1 = require("../schema/User.Schema");
const User_Controller_1 = __importDefault(require("../controllers/User.Controller"));
const validate_1 = __importDefault(require("../helper/validate"));
class NoteRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(User_Schema_1.createUserSchema), User_Controller_1.default.create);
        this.router.patch("/:id", (0, validate_1.default)(User_Schema_1.updateUserSchema), User_Controller_1.default.update);
        this.router.delete("/:id", User_Controller_1.default.delete);
        this.router.get("", User_Controller_1.default.findAll);
        this.router.get("/:id", User_Controller_1.default.findById);
    }
}
exports.default = new NoteRoutes().router;

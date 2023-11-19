"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersRepo_1 = require("../repository/UsersRepo");
const Users_Model_1 = require("../model/Users.Model");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_user = new Users_Model_1.User();
                new_user.name = req.body.name;
                new_user.username = req.body.username,
                    new_user.password = req.body.password,
                    new_user.email = req.body.email,
                    new_user.type = req.body.type,
                    new_user.created_date = new Date(),
                    yield new UsersRepo_1.UsersRepo().save(new_user);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created user!",
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                yield new UsersRepo_1.UsersRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted user!",
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const new_user = yield new UsersRepo_1.UsersRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched user by id!",
                    data: new_user,
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_user = yield new UsersRepo_1.UsersRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all user data!",
                    data: new_user,
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const new_user = new Users_Model_1.User();
                new_user.id = id;
                new_user.name = req.body.name;
                new_user.username = req.body.username,
                    new_user.password = req.body.password,
                    new_user.email = req.body.email,
                    new_user.type = req.body.type,
                    yield new UsersRepo_1.UsersRepo().update(new_user);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated user data!",
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new UserController();

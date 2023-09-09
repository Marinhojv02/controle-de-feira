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
exports.UsersRepo = void 0;
const Users_Model_1 = require("../model/Users.Model");
class UsersRepo {
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Users_Model_1.User.create({
                    name: user.name,
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    type: user.type,
                    created_date: user.created_date,
                    last_login_date: user.last_login_date,
                });
            }
            catch (error) {
                throw new Error("Failed to create user!");
            }
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_user = yield Users_Model_1.User.findOne({
                    where: {
                        user_id: user.id,
                    },
                });
                if (!new_user) {
                    throw new Error("User not found!");
                }
                new_user.name = user.name;
                new_user.username = user.password,
                    new_user.email = user.email,
                    new_user.type = user.type,
                    yield new_user.save();
            }
            catch (error) {
                console.log(error);
                throw new Error("Failed to update user!");
            }
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_user = yield Users_Model_1.User.findOne({
                    where: {
                        user_id: userId,
                    },
                });
                if (!new_user) {
                    throw new Error("User not found!");
                }
                yield new_user.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete user!");
            }
        });
    }
    retrieveById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_user = yield Users_Model_1.User.findOne({
                    where: {
                        user_id: userId,
                    },
                });
                if (!new_user) {
                    throw new Error("Users not found!");
                }
                return new_user;
            }
            catch (error) {
                throw new Error("Failed to retrieve users!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Users_Model_1.User.findAll();
            }
            catch (error) {
                throw new Error("Failed to retrieve user!");
            }
        });
    }
}
exports.UsersRepo = UsersRepo;

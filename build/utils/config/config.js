"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
}
Config.postgresql = {
    POSTGRES_DB: process.env.POSTGRES_DB || "postgres_teste",
    POSTGRES_HOST: process.env.POSTGRES_HOST || "localhost",
    POSTGRES_PORT: process.env.POSTGRES_PORT || "5432",
    POSTGRES_USER: process.env.POSTGRES_USER || "postgres",
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "root",
};
exports.default = Config;

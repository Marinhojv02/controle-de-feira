"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
}
Config.postgresql = {
    POSTGRES_DB: process.env.POSTGRES_DB || "",
    POSTGRES_HOST: process.env.POSTGRES_HOST || "",
    POSTGRES_PORT: process.env.POSTGRES_PORT || "",
    POSTGRES_USER: process.env.POSTGRES_USER || "",
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "",
};
exports.default = Config;

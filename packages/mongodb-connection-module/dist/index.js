"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = require("mongoose");
const config = require("../config/database");
const logger_1 = require("./utils/logger");
exports.db = (0, mongoose_1.createConnection)(config.mongodb.uri, {
    auth: {
        username: config.mongodb.user,
        password: config.mongodb.pass,
    },
});
exports.db.on("error", (err) => {
    logger_1.logger.error(`[pl-mongodbconnection-module]: Connection error event: ${err.message}`);
    process.exit(1);
});
exports.db.once("open", () => logger_1.logger.info("[pl-mongodbconnection-module]: Connection openned with the DB"));
exports.db.on("connected", () => logger_1.logger.info(`[pl-mongodbconnection-module]: Mongoose connection is opened to ${config.mongodb.uri}`));
exports.db.on("disconnected", () => logger_1.logger.info("[pl-mongodbconnection-module]: Mongoose connection is disconned"));
process.on("SIGINT", () => {
    exports.db.close(() => {
        logger_1.logger.info("[pl-mongodbconnection-module]: Mongo connection has been disconnected due to application termination");
        process.exit(1);
    });
});

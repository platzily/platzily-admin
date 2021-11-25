"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgressDb = exports.MongoDb = void 0;
const dotenv = require("dotenv");
const MongoConnection_1 = require("./MongoConnection");
const PostgresConnection_1 = require("./PostgresConnection");
dotenv.config({ path: __dirname + '/../../../.env' });
exports.MongoDb = new MongoConnection_1.MongoConnection({ url: process.env.MONGODB_URI });
exports.PostgressDb = new PostgresConnection_1.PostgresConnection({ url: process.env.POSTGRES_URI });
//# sourceMappingURL=index.js.map
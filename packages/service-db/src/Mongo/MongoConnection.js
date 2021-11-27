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
exports.MongoConnection = void 0;
const typeorm_1 = require("typeorm");
const MongoConnection = function ({ url }) {
    return __awaiter(this, void 0, void 0, function* () {
        const conection = yield (0, typeorm_1.createConnection)({
            type: "mongodb",
            url: url,
            useUnifiedTopology: true,
        });
        conection;
        return Object.freeze({
            getConnection: () => {
                return conection;
            }
        });
    });
};
exports.MongoConnection = MongoConnection;

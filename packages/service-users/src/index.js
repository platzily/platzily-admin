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
exports.UserPost = exports.User = void 0;
var User_1 = require("./entities/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
var UserPost_1 = require("./entities/UserPost");
Object.defineProperty(exports, "UserPost", { enumerable: true, get: function () { return UserPost_1.UserPost; } });
const service_db_1 = require("service-db");
service_db_1.PostgressDb.getConnection().then(function (connection) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(':D postgres');
    });
});
service_db_1.MongoDb.getConnection().then(function (connection) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(':D Mongo');
    });
});
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./entities/User");
(0, User_1.modelUser)().getAll().then(function (users) {
    console.table(users);
});

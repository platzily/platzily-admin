"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
    useUnifiedTopology: true,
}).then(function (connection) {
    console.log('connect to mongodb');
}).catch(error => console.log(error));
(0, typeorm_1.createConnection)({
    type: 'postgres',
    url: 'postgres://admin:example@localhost/test'
}).then(function (connection) {
    console.log('connect to postgress');
}).catch(error => console.log(error));

"use strict";
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
  type: "mongodb",
  url: ''
}).then(function (connection) {
  // here you can start to work with your entities
  console.log('It is work!');
})["catch"](function (error) { return console.log(error); });

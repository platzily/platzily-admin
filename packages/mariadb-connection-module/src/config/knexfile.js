const assert = require("assert");
//const environment = require("../config/environment");

const config = {
  DB_HOST: "127.0.0.1",
  DB_USER: "user",
  DB_PASSWORD: "1234",
  DB_NAME: "test",
};

assert(config.DB_HOST, "DB_HOST must be provided");
assert(config.DB_USER, "DB_USER must be provided");
assert(config.DB_PASSWORD, "DB_PASSWORD must be provided");
assert(config.DB_NAME, "DB_NAME must be provided");

module.exports = {
  client: "mysql",
  connection: {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  },
};

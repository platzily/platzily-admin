const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../../../.env" });

module.exports = {
  mongodb: {
    uri: process.env[`MONGODB_URI`] || "",
    user: process.env[`MONGODB_USER`] || "",
    pass: process.env[`MONGODB_PASS`] || "",
  },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./delivery/http/server");
(0, server_1.startServe)().then(() => console.log(`Server running at http:localhost:${process.env.SERVER_PORT || 3000}`))
    .catch((err) => console.error(`Something went wrong: ${err.message}`));

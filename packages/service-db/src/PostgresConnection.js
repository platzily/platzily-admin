"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresConnection = void 0;
const typeorm_1 = require("typeorm");
const BaseConnection_1 = require("./BaseConnection");
class PostgresConnection extends BaseConnection_1.BaseConnection {
    constructor(options) {
        super();
        this.connection = this.createConnection(options.url, options.entities);
    }
    createConnection(url, entities) {
        return (0, typeorm_1.createConnection)({
            type: "postgres",
            url,
            entities,
            synchronize: true
        });
    }
}
exports.PostgresConnection = PostgresConnection;
//# sourceMappingURL=PostgresConnection.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const typeorm_1 = require("typeorm");
const BaseConnection_1 = require("./BaseConnection");
class MongoConnection extends BaseConnection_1.BaseConnection {
    constructor(options) {
        super();
        this.connection = this.createConnection(options.url, options.entities);
    }
    createConnection(url, entities = []) {
        return (0, typeorm_1.createConnection)({
            type: "mongodb",
            url: url,
            entities,
            useUnifiedTopology: true,
            synchronize: true
        });
    }
}
exports.MongoConnection = MongoConnection;
//# sourceMappingURL=MongoConnection.js.map
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
exports.startServe = void 0;
const campaign_1 = require("./routes/campaign");
const fastify_1 = require("fastify");
function startServe() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = (0, fastify_1.default)({});
        (0, campaign_1.CampaignRouter)(server);
        try {
            yield server.listen(5000);
            const address = server.server.address();
            const port = typeof address === 'string' ? address : address === null || address === void 0 ? void 0 : address.port;
        }
        catch (err) {
            server.log.error(err);
            process.exit(1);
        }
    });
}
exports.startServe = startServe;

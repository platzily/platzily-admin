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
exports.replyCampaigns = void 0;
const service_campaigns_1 = require("@platzily-admin/service-campaigns");
exports.replyCampaigns = {
    getAll: (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const campaigns = yield service_campaigns_1.campaignAdapter.getAll();
        return reply.code(201)
            .headers('Content-Type', 'application/json; charset=utf-8')
            .send({ data: campaigns });
    })
};

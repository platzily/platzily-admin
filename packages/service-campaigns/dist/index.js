"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.campaignAdapter = void 0;
const entities_1 = require("./entities");
const useCases_1 = require("./useCases");
exports.campaignAdapter = {
    getAll: (0, useCases_1.listAllUseCase)({ model: entities_1.CampaignModel }),
    banCampaign: (0, useCases_1.banCampaignUseCase)({ model: entities_1.CampaignModel })
};

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
exports.banCampaignUseCase = exports.listAllUseCase = void 0;
const logger_1 = require("../utils/logger");
const listAllUseCase = ({ model }) => () => __awaiter(void 0, void 0, void 0, function* () {
    let campaigns;
    try {
        campaigns = yield model.find().exec();
    }
    catch (error) {
        logger_1.logger.error('[pl-campaigns]: Error listing campaigns: ', error.message);
    }
    return campaigns;
});
exports.listAllUseCase = listAllUseCase;
const banCampaignUseCase = ({ model }) => (id, reason) => __awaiter(void 0, void 0, void 0, function* () {
    let campaign;
    try {
        campaign = yield model.findByIdAndUpdate(id, { active: false, reason }).exec();
        logger_1.logger.info('[pl-campaigns]: Ban campaign with id: ', id);
    }
    catch (error) {
        logger_1.logger.error('[pl-campaigns]: Error ban campaig: ', error.message);
    }
    return campaign;
});
exports.banCampaignUseCase = banCampaignUseCase;

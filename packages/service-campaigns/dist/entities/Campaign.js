"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignModel = void 0;
const mongoose_1 = require("mongoose");
const mongodb_connection_module_1 = require("@platzily-admin/mongodb-connection-module");
const CampaignSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    source: { type: String, required: true },
    medium: { type: String, required: true },
    tern: { type: String },
    content: { type: String },
    active: { type: Boolean },
}, { timestamps: true });
CampaignSchema.index({ hash: 1 });
exports.CampaignModel = mongodb_connection_module_1.db.model('campaign', CampaignSchema);

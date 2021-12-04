import { Schema } from 'mongoose';
import { db } from "@platzily-admin/mongodb-connection-module";
interface Campaign {
  name: string;
  source: string;
  medium: string;
  tern: string;
  content: string;
  active: boolean,
  createdAt: Date;
  updatedAt?: Date;
}

const CampaignSchema = new Schema<Campaign>({
  name: { type: String, required: true },
  source: { type: String, required: true },
  medium: { type: String, required: true },
  tern: { type: String },
  content: { type: String },
  active: { type: Boolean },
}, { timestamps: true });

CampaignSchema.index({ hash: 1 });

export const CampaignModel = db.model<Campaign>('campaign', CampaignSchema);

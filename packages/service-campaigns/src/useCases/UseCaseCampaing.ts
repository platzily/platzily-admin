import { MongoEntityManager } from "typeorm"
import { Campaign } from "../entities/Campaign";

export const listCampaigns = async (manager: MongoEntityManager) => {

};
export const createCampaign = async (manager: MongoEntityManager) => {
  const campaign = new Campaign();

  campaign.content = 'content';
  campaign.name = 'campaña';

  manager.save(campaign);

  console.log(campaign);
};

export const banCampaign = async (manager: MongoEntityManager) => { };

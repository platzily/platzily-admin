import { logger } from "../utils/logger";

export const listAllUseCase = ({ model }) => async () => {
  let campaigns;
  try {
    campaigns = await model.find().exec();
  } catch (error) {
    logger.error('[pl-campaigns]: Error listing campaigns: ', error.message);
  }

  return campaigns;
};

export const banCampaignUseCase = ({ model }) => async (id, reason) => {
  let campaign;
  try {
    campaign = await model.findByIdAndUpdate(id, { active: false, reason }).exec();

    logger.info('[pl-campaigns]: Ban campaign with id: ', id);
  } catch (error) {
    logger.error('[pl-campaigns]: Error ban campaig: ', error.message);
  }

  return campaign;
};

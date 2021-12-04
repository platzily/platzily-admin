const { replyCampaigns } = require('../../../../adapters');

export async function CampaignRouter(fastify) {
  fastify.get('/campaigns', {}, replyCampaigns.getAll);
  // fastify.get('/campaigns/:id/ban', {}, campaign.detailCampaign);
  // fastify.put('/campaigns/:id/unban', {}, campaign.updateCampaign);
}

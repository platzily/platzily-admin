import { campaignAdapter } from "@platzily-admin/service-campaigns";

export const replyCampaigns = {
  getAll: async (req, reply) => {
    const campaigns = await campaignAdapter.getAll();

    return reply.code(201)
      .headers('Content-Type', 'application/json; charset=utf-8')
      .send({ data: campaigns });
  }
}

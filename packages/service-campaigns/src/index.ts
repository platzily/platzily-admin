import { CampaignModel } from "./entities";

import { listAllUseCase, banCampaignUseCase } from "./useCases";

export const campaignAdapter = {
  getAll: listAllUseCase({ model: CampaignModel }),
  banCampaign: banCampaignUseCase({ model: CampaignModel })
};

// CampaignModel.create({
//   name: 'campaña 1',
//   source: 'mobil',
//   medium: 'asd',
//   tern: 'ad',
//   content: 'asd',
// });

// CampaignModel.find().exec().then((campaings) => {
//   // console.log(campaings);
//   campaings.forEach((campaing) => {
//     console.log(campaing.name);
//   });
// });

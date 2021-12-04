/// <reference types="mongoose" />
interface Campaign {
    name: string;
    source: string;
    medium: string;
    tern: string;
    content: string;
    active: boolean;
    createdAt: Date;
    updatedAt?: Date;
}
export declare const CampaignModel: import("mongoose").Model<Campaign, {}, {}, {}>;
export {};

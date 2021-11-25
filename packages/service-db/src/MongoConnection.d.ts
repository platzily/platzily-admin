import { BaseConnection } from "./BaseConnection";
declare interface MongoOptions {
    readonly url: string;
    readonly entities?: any;
}
export declare class MongoConnection extends BaseConnection {
    constructor(options: MongoOptions);
    private createConnection;
}
export {};

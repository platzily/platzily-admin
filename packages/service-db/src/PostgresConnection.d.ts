import { Connection } from "typeorm";
import { BaseConnection } from "./BaseConnection";
declare interface PostgressOptions {
    readonly url: string;
    readonly entities?: any;
}
export declare class PostgresConnection extends BaseConnection {
    constructor(options: PostgressOptions);
    createConnection(url: string, entities: any): Promise<Connection>;
}
export {};

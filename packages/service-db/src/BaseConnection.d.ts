import { Connection } from "typeorm";
export declare abstract class BaseConnection {
    protected connection: Promise<Connection>;
    getConnection(): Promise<Connection>;
}

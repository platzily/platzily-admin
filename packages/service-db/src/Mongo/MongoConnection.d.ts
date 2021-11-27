import { Connection } from "typeorm";
export declare const MongoConnection: ({ url }: {
    url: any;
}) => Promise<Readonly<{
    getConnection: () => Connection;
}>>;

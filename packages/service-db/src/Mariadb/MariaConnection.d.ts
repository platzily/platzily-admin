import { Connection } from "typeorm";
export declare const MariaConnection: ({ url }: {
    url: any;
}) => Readonly<{
    makeConnection: ({ entities }: {
        entities: any;
    }) => Promise<Connection>;
}>;

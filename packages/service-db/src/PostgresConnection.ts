import { createConnection, Connection } from "typeorm";
import { BaseConnection } from "./BaseConnection";

declare interface PostgressOptions {
  readonly url: string;
  readonly entities?: any;
}
export class PostgresConnection extends BaseConnection {
  constructor(options: PostgressOptions) {
    super();
    this.connection = this.createConnection(options.url, options.entities);
  }

  createConnection(url: string, entities: any) {
    return createConnection({
      type: "postgres",
      url,
      entities,
      synchronize: true
    });
  }
}

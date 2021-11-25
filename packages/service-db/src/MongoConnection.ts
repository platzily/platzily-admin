import { createConnection } from "typeorm";
import { BaseConnection } from "./BaseConnection";

declare interface MongoOptions {
  readonly url: string;
  readonly entities?: any;
}

export class MongoConnection extends BaseConnection {
  constructor(options: MongoOptions) {
    super();
    this.connection = this.createConnection(options.url, options.entities);
  }

  private createConnection(url: string, entities: any = []) {
    return createConnection({
      type: "mongodb",
      url: url,
      entities,
      useUnifiedTopology: true,
      synchronize: true
    });
  }
}

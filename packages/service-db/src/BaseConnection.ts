import { Connection } from "typeorm";

export abstract class BaseConnection {
  protected connection: Promise<Connection>;

  getConnection() {
    return this.connection
  }
}

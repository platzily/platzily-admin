import { createConnection, Connection } from "typeorm";

abstract class BaseConnection {
  protected connection: Promise<Connection>;

  getConnection() {
    return this.connection
  }
}
export class MongoConnection extends BaseConnection {
  constructor(url: string, entities: any) {
    super();
    this.connection = this.createConnection(url, entities);
  }

  createConnection(url: string, entities: any) {
    return createConnection({
      type: "mongodb",
      url: url,
      entities,
      authSource: 'admin',
      useUnifiedTopology: true,
      synchronize: true
    });
  }
}
export class PostgresConnection extends BaseConnection {
  constructor(username: string, password: string, port: number, host: string, database: string, entities: any) {
    super();
    this.connection = this.createConnection(username, password, port, host, database, entities);
  }

  createConnection(username: string, password: string, port: number, host: string, database: string, entities: any) {
    return createConnection({
      type: "postgres",
      host,
      port,
      database,
      username,
      password,
      entities,
      synchronize: true
    });
  }
}

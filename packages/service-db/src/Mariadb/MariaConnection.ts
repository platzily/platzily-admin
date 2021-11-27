import { createConnection, Connection } from "typeorm";

export const MariaConnection = ({ url }) => {
  const connection = async ({ entities }): Promise<Connection> => {
    return await createConnection({
      type: "mysql",
      url: url,
      entities: entities
    });
  };

  return Object.freeze({
    makeConnection: ({ entities }) => {
      return connection({ entities });
    }
  });
}

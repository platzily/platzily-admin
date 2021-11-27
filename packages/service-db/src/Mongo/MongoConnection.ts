import { createConnection, Connection } from "typeorm";

export const MongoConnection = async function ({ url }) {

  return await createConnection({
    type: "mongodb",
    url: url,
    useUnifiedTopology: true,
  });
};

import { User } from "./entities/User";

// code example next will delete
import {
  MariaDb, MongoDb
} from "service-db";


MariaDb.makeConnection({ entities: [] }).then(async function (connection) {
  console.log(':D mariadb');

  const users = await connection.manager.find(User);
  console.log(users);
});

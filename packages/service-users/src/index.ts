import { MongoConnection, PostgresConnection } from "../../db-connect-test/src/index";
import { User } from "../../db-connect-test/src/User";
import { UserPost } from "../../db-connect-test/src/UserPost";

const dbMongo = new MongoConnection('mongodb://localhost/test?retryWrites=true', [User]);
//const dbPostgress = new PostgresConnection();

const dbPostgress = new PostgresConnection('admin', 'example', 5432, 'localhost', 'test', [UserPost]);

dbPostgress.getConnection().then(async function (connect) {
  console.log('postgress :D');
});

dbMongo.getConnection().then(async function (connect) {
  console.log('mongo :D');
  const user = new User;
  user.firstName = 'Diego';
  user.lastName = 'Lozano';

  await connect.mongoManager.save(user);

  const result = await connect.mongoManager.find(User);
  console.log(result);
});

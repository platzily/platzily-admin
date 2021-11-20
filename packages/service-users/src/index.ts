import { MongoDb, PostgressDb } from "../../service-db/src/index";
import { User } from "./entities/User";
import { UserPost } from "./entities/UserPost";

PostgressDb.getConnection().then(async function (connect) {
  console.log('postgress :D');
});

MongoDb.getConnection().then(async function (connect) {
  console.log('mongo :D');
  const user = new User;
  user.firstName = 'Diego';
  user.lastName = 'Lozano';

  await connect.mongoManager.save(user);

  const result = await connect.mongoManager.find(User);
  console.log(result);
});

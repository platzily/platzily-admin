import { MongoConnection, PostgresConnection } from "./index";
import { User } from "./User";
import { UserPost } from "./UserPost";
//9aDM2xW56A1coEyK
const dbMongo = new MongoConnection('mongodb://localhost/test?retryWrites=true', [__dirname + '/User{.js,ts}']);

const dbPostgress = new PostgresConnection('admin', 'example', 5432, 'localhost', 'test', [__dirname + '/UserPost{.js,ts}']);


dbMongo.getConnection().then(async function (connect) {
  const user = new User;
  user.firstName = 'Gabriel';
  user.lastName = 'Zarate';

  await connect.mongoManager.save(user);

  const result = await connect.mongoManager.find(User);
  console.log(result);
});

dbPostgress.getConnection().then(async function (connect) {
  const user = new UserPost;
  user.firstName = 'Gabriel';
  user.lastName = 'Zarate';
  user.isActive = true;

  await connect.manager.save(user);

  const result = await connect
    .getRepository(UserPost)
    .createQueryBuilder("user_post")
    .getMany();

  console.log(result);
});

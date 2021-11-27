export { User } from "./entities/User";
export { UserPost } from "./entities/UserPost";

// code example next will delete
import { PostgressDb, MongoDb } from "service-db";

PostgressDb.getConnection().then(async function (connection) {
  console.log(':D postgres');
})

MongoDb.getConnection().then(async function (connection) {
  console.log(':D Mongo');
})

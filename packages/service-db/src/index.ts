import * as dotenv from "dotenv";
import { MongoConnection } from "./MongoConnection";
import { PostgresConnection } from "./PostgresConnection";
import { User } from "../../service-users/src/entities/User";

dotenv.config({ path: __dirname + '/../../../.env' });

export const MongoDb = new MongoConnection({ url: <string>process.env.MONGODB_URI, entities: [User] });
export const PostgressDb = new PostgresConnection({ url: <string>process.env.POSTGRES_URI });

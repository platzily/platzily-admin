import * as dotenv from "dotenv";
import { MongoConnection } from "./MongoConnection";
import { PostgresConnection } from "./PostgresConnection";

dotenv.config({ path: __dirname + '/../../../.env' });

export const MongoDb = new MongoConnection({ url: <string>process.env.MONGODB_URI });
export const PostgressDb = new PostgresConnection({ url: <string>process.env.POSTGRES_URI });

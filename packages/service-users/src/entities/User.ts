import { userModel, User } from '../dto/user';
const dbConnection = require("@platzily-admin/mariadb-connection-module");

export const modelUser = (): userModel => {
  return {
    getAll,
  };
};

async function getAll() {
  let result: User[] =  await dbConnection("users");
  return result
}

import { userModel } from "../dto/user";
const dbConnection = require("@platzily-admin/mariadb-connection-module");

export const modelUser = (): userModel => {
  return {
    getAll,
  };
};

async function getAll() {
  return await dbConnection("users");
}

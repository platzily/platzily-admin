import { User, userModel, listUserDTO } from "../dto/user";
import { dbConnection } from "mariadb-connection-module";

export const modelUser = (): userModel => {
  return {
    getAll,
  };
};

async function getAll() {
  let result: User = await dbConnection("users").returning([
    "id",
    "firstname",
    "lastname",
    "description",
    "email",
    "rol",
    "image",
    "is_active",
    "reason",
  ]);
  return result;
}

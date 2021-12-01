import { User, userModel, listUserDTO } from "../dto/user";

export const createOneUser =
  (model: userModel) => async (user: listUserDTO) => {
    try {
      //let userCreated: User = await model.getAll(user);
      //return userCreated;
    } catch (e) {
      console.log(e);
    }
  };

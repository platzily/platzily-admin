import { EntityRepository, Repository } from "typeorm";
import { User } from "./User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByName(fullname: string) {
    return this.createQueryBuilder("user")
      .where("user.fullname = :fullname", { fullname })
      .getOne();
  }

  updateName(id: number, firstName: string) {
    return this.createQueryBuilder("people")
      .update()
      .set({ firstName: firstName })
      .where("user.id = :id", { id })
      .execute();
  }
}

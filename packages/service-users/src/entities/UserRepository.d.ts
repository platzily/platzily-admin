import { Repository } from "typeorm";
import { User } from "./User";
export declare class UserRepository extends Repository<User> {
    findByName(fullname: string): Promise<User>;
    updateName(id: number, firstName: string): Promise<import("typeorm").UpdateResult>;
}

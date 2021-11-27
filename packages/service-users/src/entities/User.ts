// id: number;
// firstname: string;
// lastname: string;
// description: string;
// email: string;
// rol: string;
// image: string;
// is_active: boolean;
// reason: string;
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  rol: string;

  @Column()
  image: string;

  @Column()
  reason: string;

  @Column()
  is_active: boolean;

}

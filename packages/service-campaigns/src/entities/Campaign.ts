import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity("campaign")
export class Campaign {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  source: string;

  @Column()
  medium: string;

  @Column()
  tern: string;

  @Column()
  content: string;

  @Column({ type: 'timestamp' })
  createdAt: Date

  @Column({ type: 'timestamp', nullable: true })
  updatedAt?: Date

}

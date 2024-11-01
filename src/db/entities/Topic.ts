import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { User } from "./User";

@Entity()
export class Topic extends BaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likes: number;

  @ManyToOne(() => User, (user) => user.topics)
  user: User;
}

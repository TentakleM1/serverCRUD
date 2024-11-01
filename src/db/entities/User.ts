import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { Topic } from "./Topic";

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    select: false,
  })
  password?: string;

  @Column()
  birthDate: string;

  @OneToMany(() => Topic, (topic) => topic.user)
  topics: Topic[];
}

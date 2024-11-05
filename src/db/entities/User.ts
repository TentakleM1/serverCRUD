import { Entity, Column } from "typeorm";
import { BaseEntity } from "../BaseEntity";

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
}

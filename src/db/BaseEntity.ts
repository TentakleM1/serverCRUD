import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  update_date: Date;

  @DeleteDateColumn()
  delete_date: Date;
}

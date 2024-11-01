import { FindOptionsSelect, Repository } from "typeorm";
import { AppDataSource } from "../db/data-source";
import { User } from "../db/entities/User";

class UserQueryBase {
  private selectUser: FindOptionsSelect<User> = {
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    birthDate: true,
  };
  repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  getAllUsers() {
    return this.repository.find();
  }

  getUserByEmail(email: string) {
    return this.repository.findOne({
      where: {
        email,
      },
    });
  }

  async getUserById(id: number) {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  }

  getUserWithPasswordByEmail(email: string) {
    return this.repository.findOne({
      where: {
        email: email,
      },
      select: this.selectUser,
    });
  }

  getUserWithPasswordById(id: number) {
    return this.repository.findOne({
      where: {
        id: id,
      },
      select: this.selectUser,
    });
  }

  createUser(user: User) {
    return this.repository.save(user);
  }

  async editUser(user: User) {
    await this.repository.update(user.id, user);
    return await this.getUserById(user.id);
  }

  deleteUser(id: number) {
    this.repository.delete(id);
  }
}

export const UserQuery = new UserQueryBase();

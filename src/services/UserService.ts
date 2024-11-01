import { User } from "../db/entities/User";
import { UserQuery } from "../query/UserQuery";
import { CustomError } from "../shared/utils/customError/CustomError";
import { hashPassword } from "../shared/utils/hashPassword/hashPassword";
import { IUser } from "../types";

export class UserService {
  static async getAllUsers() {
    return await UserQuery.getAllUsers();
  }

  static async getUserById(id: number) {
    const userDB = await UserQuery.getUserById(id);
    if (!userDB) {
      throw new CustomError(404, "User not Found");
    }
    return userDB
  }

  static getUserByEmail(email: string) {
    const userDB = UserQuery.getUserByEmail(email);
    if (!userDB) {
      throw new CustomError(404, "User not Found");
    }
    return userDB;
  }

  static async getFullUserByEmail(email: string) {
    return await UserQuery.getFullUserByEmail(email);
  }

  static async editUser(user: IUser) {
    user.password = hashPassword(user.password)
    const userDB = await UserQuery.editUser(user);
    if (!userDB) {
      throw new CustomError(404, "User not Found");
    }
    return userDB
  }

  static deleteUser(id: number) {
    UserQuery.deleteUser(id);
  }

  static async createUser(user: User) {
    return await UserQuery.createUser(user);
  }

  static async riseUser(email: string) {
    await UserQuery.riseUser(email);
  }

}

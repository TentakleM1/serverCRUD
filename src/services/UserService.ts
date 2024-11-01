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

  static async getUserWithPasswordByEmail(email: string) {
    const userDB = await UserQuery.getUserWithPasswordByEmail(email);
    if(!userDB) {
      throw new CustomError(404, 'User not found');
    }
    return userDB
  }

  static async getUserWithPasswordById(id: number) {
    const userDB = await UserQuery.getUserWithPasswordById(id);
    if(!userDB) {
      throw new CustomError(404, 'User not found');
    }
    return userDB
  }

  static async editUser(user: IUser) {
    const userDB = await UserQuery.editUser(user);
    if (!userDB) {
      throw new CustomError(404, "User not Found");
    }
    return userDB
  }

  static async changePasswordUser(id: number, password: string) {
    const userDB = await this.getUserWithPasswordById(id);

    const newHashPassword = hashPassword(password);

    if(userDB.password === newHashPassword) {
      throw new CustomError(400, 'Password dublicate');
    }
    userDB.password = newHashPassword;
    await UserQuery.editUser(userDB);
  }

  static deleteUser(id: number) {
    UserQuery.deleteUser(id);
  }

  static async createUser(user: User) {
    return await UserQuery.createUser(user);
  }

}

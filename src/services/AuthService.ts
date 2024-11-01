import { User } from "../db/entities/User";
import { CustomError } from "../shared/utils/customError/CustomError";
import { hashPassword } from "../shared/utils/hashPassword/hashPassword";
import { ISignIn, IUser } from "../types";
import { TokenService } from "./TokenService";
import { UserService } from "./UserService";

export class AuthService {
  static async signIn(login: ISignIn) {
    let userDB: User | null = await UserService.getFullUserByEmail(login.email);
    if (!userDB) {
      await UserService.riseUser(login.email)
      userDB = await UserService.getFullUserByEmail(login.email);
      if(!userDB) {
        throw new CustomError(404, "User not Found");
      }
    }
    if (userDB.password !== hashPassword(login.password)) {
      throw new CustomError(400, "incorrect password");
    }
    delete userDB.password;
    return userDB 
  }

  static async signUp(user: IUser) {
    user.password = hashPassword(user.password)
    const userDB: User = await UserService.createUser(user);
    delete userDB.password
    return userDB
  }
}

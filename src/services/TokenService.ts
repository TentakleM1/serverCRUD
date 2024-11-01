import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { ITokens } from "../types";
import { CustomError } from "../shared/utils/customError/CustomError";
dotenv.config();

const { TOKEN_SECRET, REFRESH_TOKEN_SECRET, TOKEN_LIFE, REFRESH_TOKEN_LIFE } =
  process.env;

export class TokenService {
  static generateToken(id: number, secret: string, time: string) {
    return jwt.sign({ id }, secret, { expiresIn: time });
  }

  static generateAccesToken(id: number): string {
    return this.generateToken(id, TOKEN_SECRET, TOKEN_LIFE);
  }

  static generateRefreshToken(id: number): string {
    return this.generateToken(id, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_LIFE);
  }

  static generateAllTokens(id: number): ITokens {
    return {
      token: this.generateAccesToken(id),
      refresh_token: this.generateRefreshToken(id)
    }
  }

  static decodeToken(token: string, secret: string) {
    return jwt.verify(token, secret)
  }

  static checkToken(token: string) {
    const decoded = this.decodeToken(token, TOKEN_SECRET)
    if(decoded instanceof String ) {
      throw new CustomError(401);
    }

    return (decoded as JwtPayload).id;
  }

  static checkRefreshToken(token: string) {
    const decodec =  this.decodeToken(token, REFRESH_TOKEN_SECRET)
    if(!decodec || decodec instanceof String ) {
      throw new CustomError(401);
    }

    if(decodec instanceof Object) {
      return decodec.id
    }
  }
}

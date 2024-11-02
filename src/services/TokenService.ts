import jwt, { JwtPayload } from "jsonwebtoken";
import { ITokens } from "../types";
import { config } from "../config";

const { tokenSecret, refreshTokenSecret,tokenLife, refreshTokenLife } =
  config;

export class TokenService {
  static generateToken(id: number, secret: string, time: string) {
    return jwt.sign({ id }, secret, { expiresIn: time });
  }

  static generateAccesToken(id: number): string {
    return this.generateToken(id, tokenSecret, tokenLife);
  }

  static generateRefreshToken(id: number): string {
    return this.generateToken(id, refreshTokenSecret, refreshTokenLife);
  }

  static generateAllTokens(id: number): ITokens {
    return {
      token: this.generateAccesToken(id),
      refresh_token: this.generateRefreshToken(id),
    };
  }

  static decodedToken(token: string, secret: string) {
    return jwt.verify(token, secret);
  }

  static checkToken(token: string) {
    const payload = this.decodedToken(token, tokenSecret);
    return (payload as JwtPayload).id;
  }

  static checkRefreshToken(token: string) {
    const payload = this.decodedToken(token, refreshTokenSecret);
    return (payload as JwtPayload).id;
  }
}

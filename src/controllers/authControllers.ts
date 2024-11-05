import { Handler } from "express";
import { AuthService } from "../services/AuthService";
import { IData } from "../types";
import { CustomError } from "../shared/utils/customError/CustomError";
import { TokenService } from "../services/TokenService";
import { UserService } from "../services/UserService";

export const signIn: Handler = async (req, res, next) => {
  if (!req.body) {
    throw new CustomError(400)
  }
  try {
    const userDB = await AuthService.signIn(req.body);
    const data: IData = {
      payload: {
        tokens: TokenService.generateAllTokens(userDB.id),
        user: userDB,
      },
    };
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};

export const signUp: Handler = async (req, res, next) => {
  if (!req.body) {
    throw new CustomError(400)
  }
  try {
    const userDB = await AuthService.signUp(req.body);
    const data: IData = {
      payload: {
        tokens: TokenService.generateAllTokens(userDB.id),
        user: userDB,
      },
    };
    res.status(201).send(data);   
  } catch (err) {
    next(new CustomError(400, 'User is already registered'))
  }
};

export const refreshToken: Handler =  async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new CustomError(401);
    }
    const token = req.headers.authorization.split(" ")[1];
    const userId = TokenService.checkRefreshToken(token);
    await UserService.getUserById(userId);
    res.status(200).send({
      payload: {
        tokens: TokenService.generateAllTokens(userId)
      }
    });
  } catch (err) {
    next(err);
  }
}

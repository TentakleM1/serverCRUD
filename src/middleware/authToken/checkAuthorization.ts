import { Handler } from "express";
import { CustomError } from "../../shared/utils/customError/CustomError";
import { TokenService } from "../../services/TokenService";
import { UserService } from "../../services/UserService";

export const checkAuthorization: Handler = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new CustomError(401);
    }
    const token = req.headers.authorization.split(" ")[1];
    const userId = TokenService.checkToken(token);

    req.data = await UserService.getUserById(userId);
    
    next();
  } catch (err) {
    next(new CustomError(401, (err as Error).message));
  }
};

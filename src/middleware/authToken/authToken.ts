import { Handler } from "express";
import { CustomError } from "../../shared/utils/customError/CustomError";
import { TokenService } from "../../services/TokenService";
import { UserService } from "../../services/UserService";

export const authCheck: Handler = async (req, res, next) => {
  try {
    console.log('here');
    if (!req.headers.authorization) {
      throw new CustomError(401);
    }
    console.log('we');

    const token = req.headers.authorization.split(" ")[1];
    console.log('go', token);

    const userId = TokenService.checkToken(token);
    req.data = await UserService.getUserById(userId);
    next();
  } catch {
    next(new CustomError(401));
  }
};

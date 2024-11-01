import { Handler } from "express";
import { ObjectSchema } from "yup";
import { signinSchema, signupSchema } from "../schema/authSchema";
import { CustomError } from "../../shared/utils/customError/CustomError";

type ValidationType = (
  schema?: ObjectSchema<signupSchema | signinSchema>
) => Handler;

export const validation: ValidationType = (schema) => {
  return async (req, res, next) => {
    try {
      if (schema) {
        await schema.validate(req.body);
        return next();
      }

      if (!req.params.userId) {
        throw new CustomError(400)
      }

      next();
    } catch (err) {
      next(new CustomError(400, (err as Error).message))
    }
  };
};

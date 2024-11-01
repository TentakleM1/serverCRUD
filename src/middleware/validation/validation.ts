import { Handler } from "express";
import { ObjectSchema } from "yup";
import { CustomError } from "../../shared/utils/customError/CustomError";
import { ISigninSchema, ISignupSchema } from "../schema/authSchema";
import { IChangePasswordSchema, IEditUserSchema, ILinkSchema } from "../schema/userSchema";

type ValidationType = (
  schema: ObjectSchema<ISigninSchema | ISignupSchema | IEditUserSchema | IChangePasswordSchema | ILinkSchema>
) => Handler;

export const validation: ValidationType = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate({
        params: req.params.userId,
        body: req.body,
      }, { stripUnknown: false });

      return next();
    } catch (err) {
      return next(new CustomError(400, (err as Error).message))
    }
  };
};

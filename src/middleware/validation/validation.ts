import { Handler } from "express";
import { CustomError } from "../../shared/utils/customError/CustomError";
import { IRequestShchema } from "./schema/types";
import * as yup from 'yup'

type createValidatorMiddalwareType = (schema: yup.ObjectSchema<IRequestShchema>) => Handler;

export const createValidatorMiddalware: createValidatorMiddalwareType = (schema) => {
  return async (req, _, next) => {
    try {
      await schema.validate(
        req,
        { stripUnknown: false }
      );
      return next();
    } catch (err) {
      return next(new CustomError(400, (err as Error).message));
    }
  };
};

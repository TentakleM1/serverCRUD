import { Handler } from "express";
import { CustomError } from "../../shared/utils/customError/CustomError";
import { IRequsetShchema } from "./schema/types";
import * as yup from 'yup'

type createValidatorMiddalwareType = (schema: yup.ObjectSchema<IRequsetShchema>) => Handler;

type ValidationSchemasType =
  | yup.StringSchema
  | yup.NumberSchema
  | yup.BooleanSchema;

type SchemaItemType = Record<string, ValidationSchemasType>;

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

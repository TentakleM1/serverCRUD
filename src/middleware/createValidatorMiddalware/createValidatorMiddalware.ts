import * as yup from "yup";
import { Handler } from "express";
import { CustomError } from "../../shared/utils/customError/CustomError";

export type SchemaValueType = yup.StringSchema | yup.NumberSchema | yup.BooleanSchema;

export type SchemaObjectType = Record<string, SchemaValueType>

export interface IRequestShchema {
  params?: SchemaObjectType;
  body?:  SchemaObjectType;
}


type createValidatorMiddalwareType = (schema: IRequestShchema ) => Handler;

export const createValidatorMiddalware: createValidatorMiddalwareType = (schema) => {
  return async (req, _, next) => {
    try {
      const customSchema: yup.ObjectShape = {};

      for (const key in schema) {
        if (key) {
          customSchema[key] = yup
            .object()
            .shape(schema[key as keyof typeof schema] as SchemaObjectType)
            .noUnknown(true, "Unknown fields were passed in the request");
        }
      }

      const shapeTemplate = yup.object().shape(customSchema);

      await shapeTemplate.validate(
        req,
        { stripUnknown: false }
      );
      return next();
    } catch (err) {
      return next(new CustomError(400, (err as Error).message));
    }
  };
};

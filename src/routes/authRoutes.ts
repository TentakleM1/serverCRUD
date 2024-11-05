import express from "express";
import { signUp, signIn, refreshToken } from "../controllers/authControllers";
import { createValidatorMiddalware } from "../middleware/createValidatorMiddalware/createValidatorMiddalware";
import { signInSchema, signUpSchema } from "../middleware/createValidatorMiddalware/schema/authSchema";


export const authRouter = express
  .Router()
  .post(`/signin`, createValidatorMiddalware(signInSchema), signIn)
  .post(`/signup`, createValidatorMiddalware(signUpSchema), signUp)
  .get(`/refresh`, refreshToken);

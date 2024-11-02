import express from "express";
import { signUp, signIn, refresh } from "../controllers/authControllers";
import { createValidatorMiddalware } from "../middleware/validation/validation";
import { signinSchema, signupSchema } from "../middleware/validation/schema/authSchema";


export const authRouter = express
  .Router()
  .post(`/signin`, createValidatorMiddalware(signinSchema), signIn)
  .post(`/signup`, createValidatorMiddalware(signupSchema), signUp)
  .get(`/refresh`, refresh);


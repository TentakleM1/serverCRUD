import express from "express";
import { signUp, signIn, refresh } from "../controllers/authControllers";
import { validation } from "../middleware/validation/validation";
import { signinSchema, signupSchema } from "../middleware/schema/authSchema";


export const authRouter = express
  .Router()
  .post(`/signin`, validation(signinSchema), signIn)
  .post(`/signup`, validation(signupSchema), signUp)
  .get(`/refresh`, refresh);


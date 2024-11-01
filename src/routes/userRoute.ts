import express from "express";
import {
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
} from "../controllers/userControllers";
import { validation } from "../middleware/validation/validation";
import { signupSchema } from "../middleware/schema/authSchema";

export const userRouter = express
  .Router()
  .get(`/users`, getAllUsers)
  .post(`/`, validation(signupSchema), editUser)
  .get(`/:userId`, validation(), getUser)
  .delete(`/:userId`, validation(), deleteUser);
import express from "express";
import {
  changePassword,
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
} from "../controllers/userControllers";
import { createValidatorMiddalware } from "../middleware/createValidatorMiddalware/createValidatorMiddalware";
import { changePasswordSchema, editUserSchema, paramUserIdSchema } from "../middleware/createValidatorMiddalware/schema/userSchema";

export const userRouter = express
  .Router()
  .get(`/users`, getAllUsers)
  .post(`/`, createValidatorMiddalware(editUserSchema), editUser)
  .get(`/:userId`, createValidatorMiddalware(paramUserIdSchema), getUser)
  .delete(`/:userId`, createValidatorMiddalware(paramUserIdSchema), deleteUser)
  .post(`/changepassword/:userId`, createValidatorMiddalware(changePasswordSchema), changePassword);
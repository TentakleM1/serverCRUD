import express from "express";
import {
  changePassword,
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
} from "../controllers/userControllers";
import { createValidatorMiddalware } from "../middleware/validation/validation";
import { changePasswordSchema, editUserSchema, paramIdSchema } from "../middleware/validation/schema/userSchema";

export const userRouter = express
  .Router()
  .get(`/users`, getAllUsers)
  .post(`/`, createValidatorMiddalware(editUserSchema), editUser)
  .get(`/:userId`, createValidatorMiddalware(paramIdSchema), getUser)
  .delete(`/:userId`, createValidatorMiddalware(paramIdSchema), deleteUser)
  .post(`/changepassword/:userId`, createValidatorMiddalware(changePasswordSchema), changePassword);
import express from "express";
import {
  changePassword,
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
} from "../controllers/userControllers";
import { validation } from "../middleware/validation/validation";
import { changePasswordSchema, editUserSchema, linkSchema } from "../middleware/schema/userSchema";

export const userRouter = express
  .Router()
  .get(`/users`, getAllUsers)
  .post(`/`, validation(editUserSchema), editUser)
  .get(`/:userId`, validation(linkSchema), getUser)
  .delete(`/:userId`, validation(linkSchema), deleteUser)
  .post(`/changepassword/:userId`, validation(changePasswordSchema), changePassword);
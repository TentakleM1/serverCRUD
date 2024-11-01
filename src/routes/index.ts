import express from "express";
import { userRouter } from "./userRoute";
import { authRouter } from "./authRoutes";
import { authCheck } from "../middleware/authToken/authToken";

const generalRouter = express.Router();
generalRouter.use(`/auth`, authRouter);
generalRouter.use(`/user`, authCheck, userRouter);

export default generalRouter;

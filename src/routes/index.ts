import express from "express";
import { userRouter } from "./userRoutes";
import { authRouter } from "./authRoutes";
import { checkAuthorization } from "../middleware/authToken/checkAuthorization";

const generalRouter = express.Router();
generalRouter.use(`/auth`, authRouter);
generalRouter.use(`/user`, checkAuthorization, userRouter);

export default generalRouter;

import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { CustomError } from "../../shared/utils/customError/CustomError";

export const errorHandler: ErrorRequestHandler = (err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    res.status(err.code).json({
      message: err.message,
    });
    return;
  }
  res.status(500).json({ error: "Internal Server Error" });
};

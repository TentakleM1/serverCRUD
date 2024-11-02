import { User } from "./db/entities/User";
import { IData } from "./types";

export {};

declare global {
  namespace Express {
    interface Request {
      data?: User;
    }
  }
}

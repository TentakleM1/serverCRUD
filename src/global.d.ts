import { User } from "./db/entities/User";

export {};

declare global {
  namespace Express {
    interface Request {
      data?: User;
    }
  }
}

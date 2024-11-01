import { IData } from "./types";

export {};

declare global {
  namespace Express {
    interface Request {
      data?: IData;
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;

      TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;

      TOKEN_LIFE: string;
      REFRESH_TOKEN_LIFE: string;

      SALT: string;
      ITERATIONS: string;
      KEYLEN: string;
      DIGEST: string;

      POSTGRES_DB: string;
      POSTGRES_USER: string;
      POSTGRES_HOST: string;
      POSTGRES_PORT: string;
      POSTGRES_PASSWORD: string;
    }
  }
}

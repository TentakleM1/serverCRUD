import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_PASSWORD,
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [`${__dirname}/entities/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
});

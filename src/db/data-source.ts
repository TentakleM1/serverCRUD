import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { config } from "../config";
dotenv.config();

const {
  postgresDb,
  postgresUser,
  postgresHost,
  postgresPort,
  postgresPassword
} = config;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: postgresHost,
  port: postgresPort,
  username: postgresUser,
  password: postgresPassword,
  database: postgresDb,
  synchronize: false,
  logging: false,
  entities: [`${__dirname}/entities/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
});

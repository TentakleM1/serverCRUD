import { Express } from "express";
import express from "express";
import { AppDataSource } from "./db/data-source";
import dotenv from "dotenv";
import generalRouter from "./routes";
import { errorHandler } from "./middleware/errorHandler/errorHandler";
dotenv.config();



const port: number = Number(process.env.PORT) || 3000;
const app: Express = express();

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use(express.json());
app.use(generalRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listener on port: ${port}`));

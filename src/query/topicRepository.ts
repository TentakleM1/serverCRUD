import { AppDataSource } from "../db/data-source";
import { Topic } from "../db/entities/Topic";

export const topicRepository = AppDataSource.getRepository(Topic);

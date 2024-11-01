import { Handler } from "express";
import { topicRepository } from "../query/topicRepository";

export const createTopic: Handler = async (req, res) => {
  try {
    const topic = topicRepository.create(req.body);
    const result = await topicRepository.save(topic);
    res.send(result);
  } catch (error) {
    res.status(500);
  }
};


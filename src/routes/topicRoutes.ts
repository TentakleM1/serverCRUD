import * as express from "express";
import { createTopic } from "../controllers/topicControllers";

const router = express.Router();

router.post("/create", createTopic);

export default router;

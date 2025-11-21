import express from "express";
import {
  translateController,
  transliterateController
} from "../controllers/translateController.js";

const router = express.Router();

router.post("/translate", translateController);
router.post("/transliterate", transliterateController);

export default router;

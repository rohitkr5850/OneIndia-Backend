import express from "express";
import {
  createSavedController,
  getSavedController,
  deleteSavedController
} from "../controllers/savedController.js";

const router = express.Router();

router.post("/saved", createSavedController);
router.get("/saved", getSavedController);
router.delete("/saved/:id", deleteSavedController);

export default router;

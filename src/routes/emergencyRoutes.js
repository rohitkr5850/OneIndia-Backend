import express from "express";
import { getEmergencyController } from "../controllers/emergencyController.js";

const router = express.Router();

router.get("/emergency/:lang", getEmergencyController);

export default router;

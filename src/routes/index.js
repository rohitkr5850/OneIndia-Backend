import express from "express";
import translateRoutes from "./translateRoutes.js";
import emergencyRoutes from "./emergencyRoutes.js";
import locationRoutes from "./locationRoutes.js";
import savedRoutes from "./savedRoutes.js";

const router = express.Router();

router.use(translateRoutes);
router.use(emergencyRoutes);
router.use(locationRoutes);
router.use(savedRoutes);

export default router;

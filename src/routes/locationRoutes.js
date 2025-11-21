import express from "express";
import { getLocationSuggestionsController } from "../controllers/locationController.js";

const router = express.Router();

router.get("/location/suggestions", getLocationSuggestionsController);

export default router;

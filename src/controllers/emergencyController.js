import { asyncHandler } from "../middlewares/asyncHandler.js";
import { getEmergencyPhrases } from "../services/emergencyService.js";

export const getEmergencyController = asyncHandler(async (req, res) => {
  const phrases = getEmergencyPhrases(req.params.lang);
  res.json({ success: true, phrases });
});

import { asyncHandler } from "../middlewares/asyncHandler.js";
import { getSuggestions } from "../services/locationService.js";

export const getLocationSuggestionsController = asyncHandler(async (req, res) => {
  const { state, lang = "hi" } = req.query;
  const suggestions = getSuggestions(state, lang);
  res.json({ success: true, suggestions });
});

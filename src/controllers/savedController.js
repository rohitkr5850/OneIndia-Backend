import { asyncHandler } from "../middlewares/asyncHandler.js";
import { createSaved, getSaved, deleteSaved } from "../services/savedService.js";

export const createSavedController = asyncHandler(async (req, res) => {
  const phrase = await createSaved(req.body);
  res.status(201).json({ success: true, phrase });
});

export const getSavedController = asyncHandler(async (req, res) => {
  const phrases = await getSaved();
  res.json({ success: true, phrases });
});

export const deleteSavedController = asyncHandler(async (req, res) => {
  await deleteSaved(req.params.id);
  res.json({ success: true, message: "Deleted" });
});

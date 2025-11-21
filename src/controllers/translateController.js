import { asyncHandler } from "../middlewares/asyncHandler.js";
import { translateText } from "../services/translateService.js";
import { toHinglish } from "../services/transliterateService.js";

// /api/translate
export const translateController = asyncHandler(async (req, res) => {
  const { text, from, to } = req.body;

  const translated = await translateText(text, from, to);
  const hinglish = toHinglish(translated);

  res.json({ success: true, translated, hinglish });
});

// /api/transliterate
export const transliterateController = asyncHandler(async (req, res) => {
  const { text } = req.body;

  const hinglish = toHinglish(text);
  res.json({ success: true, hinglish });
});

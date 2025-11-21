import translate from "google-translate-api-x";

export const translateText = async (text, from, to) => {
  if (!text) throw new Error("Text is required");

  const result = await translate(text, { from, to });
  return result.text;
};

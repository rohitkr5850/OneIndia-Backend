import { SUGGESTIONS_BY_STATE } from "../utils/phrases.js";

export const getSuggestions = (state, lang) => {
  const data = SUGGESTIONS_BY_STATE[state];
  if (!data) return [];
  return data[lang] || Object.values(data).flat();
};

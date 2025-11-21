import { EMERGENCY_PHRASES } from "../utils/phrases.js";

export const getEmergencyPhrases = (lang) => {
  return EMERGENCY_PHRASES[lang] || EMERGENCY_PHRASES["hi"];
};

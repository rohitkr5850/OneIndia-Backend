import SavedPhrase from "../models/SavedPhrase.js";

export const createSaved = (data) => SavedPhrase.create(data);
export const getSaved = () => SavedPhrase.find().sort({ createdAt: -1 });
export const deleteSaved = (id) => SavedPhrase.findByIdAndDelete(id);

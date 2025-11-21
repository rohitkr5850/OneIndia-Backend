import mongoose from "mongoose";

const savedPhraseSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    translated: { type: String, required: true },
    hinglish: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    tag: { type: String, default: "general" }
  },
  { timestamps: true }
);

export default mongoose.model("SavedPhrase", savedPhraseSchema);

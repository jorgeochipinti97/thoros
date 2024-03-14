import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
  {
    nombre: { type: String },
    email: { type: String },
    rol: { type: String },
    celular: { type: String },
    instagram: { type: String },
  },
  { timestamps: true }
);

const Waitlist =
  mongoose.models.Waitlist || mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;

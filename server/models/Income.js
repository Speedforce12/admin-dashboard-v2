import mongoose from "mongoose";

const incomeSchema = mongoose.Schema(
  {
    income: { type: String, max: 200, required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    category: { type: String, max: 200, required: true },
  },
  { timestamps: true }
);

const Income = mongoose.model("Income", incomeSchema);

export default Income;

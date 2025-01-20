import mongoose from "mongoose";

const budgetSchema = mongoose.Schema({
      month: {
        type: String, //YYYY-MM (e.g., "2024-12")
        required: true,
      },
      budgetAmount: {
        type: Number, // Total budget for the month
        required: true,
      },
      categories: {
        type: Map,
        of: Number, // Key-value pairs for categories and their allocated budget amounts
        default: {},
      },
}, { timestamps: true });

const BUDGET = mongoose.model("BUDGET", budgetSchema);
export default BUDGET;
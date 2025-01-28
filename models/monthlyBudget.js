import mongoose from "mongoose";

const monthlyBudgetSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true,
    },
    limit: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        }
},{timestamps: true});

const MONTHLYBUDGET = mongoose.model("monthlyBudget", monthlyBudgetSchema);

export default MONTHLYBUDGET;
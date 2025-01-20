import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    }
});

const EXPENSE = mongoose.model("expense", expenseSchema);
export default EXPENSE;
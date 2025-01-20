import BUDGET from "../models/budget.js";

export const createBudget = async (req, res) => {
    const { userId, month, budgetAmount, categories } = req.body;
  
    try {
      if ( !month || !budgetAmount || !categories) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Create a new budget document
      const newBudget = new BUDGET({
        month,
        budgetAmount,
        categories,
      });
  
      await newBudget.save();
  
      return res.status(201).json({ message: "Budget created successfully", budget: newBudget });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error, please try again later." });
    }
  };
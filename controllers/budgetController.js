
import MONTHLYBUDGET from "../models/monthlyBudget.js";

  export const createMonthlyBudget = async (req, res) => {
    try {
      
      const userId = req.user?.id;
      const { month,limit, category } = req.body;
  
      if (!userId ||!month || !limit || !category) {
        return res.status(400).json({ message: "All fields are required" });
      }
      console.log(req.body);
      const newMonthlyBudget = new MONTHLYBUDGET({
        userId,
        month,
        limit,
        category, 
        createdBy: userId, 
      });
  

      await newMonthlyBudget.save();
  
      return res.status(200).json({
        message: "Monthly Budget created successfully"});

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Server error, please try again later.",
      });
    }
  };

  export const getAllMonthlyBudgets = async (req, res) => {
    try {
      const userId = req.user?.id;
      const monthlyBudgets = await MONTHLYBUDGET.find({ createdBy: userId });
      console.log(monthlyBudgets);
      res.status(200).json(monthlyBudgets);

    } catch (error) {
      console.log(error);
        res.status(400).json({message: error.message});
    }
  }



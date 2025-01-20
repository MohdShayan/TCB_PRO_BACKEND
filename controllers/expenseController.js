import EXPENSE from "../models/expense.js";

export const createExpense = async (req, res) => {
  console.log(req.body);  
  const { title, amount, category, date } = req.body;
  
 
  const userId = req.user.id;  
  
  try {
    
    const newExpense = new EXPENSE({
      title,
      amount,
      category,
      date,
      createdBy: userId, 
    });

    
    await newExpense.save();

    
    res.status(201).send('Expense created successfully');
  } catch (error) {
    console.log(error);  
    res.status(400).json({ message: error.message });  
  }
};


export const getAllExpenses = async (req,res) => {
    try {
        const allExpenses = await EXPENSE.find({createdBy: req.user.id});
        res.status(200).json(allExpenses);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}
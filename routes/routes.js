import express from 'express';
import {getAllUsers } from '../controllers/userController.js';
import { createExpense, getAllExpenses } from '../controllers/expenseController.js';
import { createBudget } from '../controllers/budgetController.js';
import checkForAuthentication from '../middleware/auth.js';

const router = express.Router();

router.get('/user/getall', getAllUsers);


router.get('/expense', getAllExpenses);
router.post('/expense', createExpense);
router.post('/budget', createBudget);

const products = [
    {
      id: 1,
      name: 'Product A',
      description: 'Description of Product A',
      price: 100.0,
      stock: 10,
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Description of Product B',
      price: 200.0,
      stock: 5,
    },
    {
      id: 3,
      name: 'Product C',
      description: 'Description of Product C',
      price: 300.0,
      stock: 15,
    },
  ];
  

  
  router.get('/products', checkForAuthentication, (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully!',
      data: products,
    });
  });

export default router;

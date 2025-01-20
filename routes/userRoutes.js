import express from 'express';

const router = express.Router();
import { handleLogin,handleLogout,handleSignup } from '../controllers/userController.js';


router.post('/login', handleLogin);
router.post('/signup', handleSignup);
router.post('/logout', handleLogout);

export default router;
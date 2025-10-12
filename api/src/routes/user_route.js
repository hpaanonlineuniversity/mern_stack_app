import { register,login } from '../controllers/auth_controller.js';
import express from 'express';

const router = express.Router();

// User registration
router.post('/register',register);

// User login
router.post('/login',login);


export default router;
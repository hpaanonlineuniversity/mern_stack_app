import {register} from '../controllers/auth_controller.js';
import express from 'express';

const router = express.Router();

// User registration
router.post('/register',register);


export default router;
import { register,login, google, signout } from '../controllers/auth_controller.js';
import express from 'express';

const router = express.Router();

// User registration
router.post('/register',register);

// User login
router.post('/login',login);

router.post('/google', google);

router.get('/signout', signout);


export default router;
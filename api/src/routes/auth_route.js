import { register,login, github, signout } from '../controllers/auth_controller.js';
import express from 'express';

const router = express.Router();

// User registration
router.post('/register',register);

// User login
router.post('/login',login);

router.post('/github', github);

router.get('/signout', signout);


export default router;
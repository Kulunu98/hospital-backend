import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';
import authenticate from '../middlewares/auth.middleware.js';
import onlyAdmin from '../middlewares/role.middleware.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', authenticate, onlyAdmin, registerUser); // 👈 protected route

export default router;

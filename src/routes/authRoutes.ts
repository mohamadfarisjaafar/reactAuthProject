// src/routes/authRoutes.ts

import express from 'express';
import { register, login, getUser } from '../controllers/authController';
import { authenticateJWT } from '../middleware/authMiddleware';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login user and return JWT token
// @access  Publica
router.post('/login', login);

// @route   GET /api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', authenticateJWT, getUser);

export default router;

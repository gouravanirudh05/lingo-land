import { Router } from 'express';
import { getProfile } from '../controllers/profileController.js'
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.use(authMiddleware); // Apply authentication middleware to all routes under /api/rooms

router.get('/profile', getProfile);

export default router;

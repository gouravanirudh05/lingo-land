import { Router } from 'express';
import { getProfile } from '../controllers/profileController.js'
import { getLeaderboard } from '../controllers/leaderboardController.js'
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.use(authMiddleware); // Apply authentication middleware to all routes under /api/rooms

router.get('/profile', getProfile);
router.get('/leaderboard', getLeaderboard);

export default router;

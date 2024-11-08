import { Router } from 'express';
import { getChapters } from '../controllers/chapterController.js'
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.use(authMiddleware); // Apply authentication middleware to all routes under /api/rooms

router.post('/chapters', getChapters);

export default router;

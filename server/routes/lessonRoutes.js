import { Router } from 'express';
import { checkAnswer } from '../controllers/lessonController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.use(authMiddleware); // Apply authentication middleware to all routes under /api/rooms

router.get('/checkAnswer', checkAnswer);

export default router;

import { Router } from 'express';
import { checkAnswer } from '../controllers/lessonController.js';
import { nextQuestion } from '../controllers/lessonController.js';
import { getNumberOfQuestions } from '../controllers/lessonController.js';
import { handleFinishQuiz } from '../controllers/lessonController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.use(authMiddleware); // Apply authentication middleware to all routes under /api/rooms

router.post('/checkAnswer', checkAnswer);
router.post('/question', nextQuestion);
router.post('/numberOfQuestions', getNumberOfQuestions);
router.post('/finish', handleFinishQuiz)

export default router;

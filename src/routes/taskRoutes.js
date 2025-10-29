import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', taskController.getTasks);
// GET /tasks/:id
router.get('/:id', getTaskById);
router.post('/', validateTask, taskController.createTask);

export default router;

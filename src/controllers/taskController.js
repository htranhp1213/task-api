import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}


// GET /tasks/:id
// GET /tasks/:id
export async function getTaskById(req, res, next) {
  try {
    const { id } = req.params;

    // 400: invalid ID (not a number)
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      return res.status(400).json({
        error: 'Validation failed',
        details: ['ID must be a number'],
      });
    }

    // DB lookup
    const task = await taskService.getTaskById(numericId);

    // 404: not found
    if (!task) {
      return res.status(404).json({
        error: 'Task not found',
      });
    }

    // 200: success
    return res.json(task);
  } catch (err) {
    next(err);
  }
}
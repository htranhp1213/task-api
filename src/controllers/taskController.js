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
export function getTaskById(req, res) {
  const { id } = req.params;

  // 400: invalid ID
  const numericId = Number(id);
  if (Number.isNaN(numericId)) {
    return res.status(400).json({
      error: 'Validation failed',
      details: ['ID must be a number'],
    });
  }

  // find task
  const task = tasks.find(t => t.id === numericId);

  // 404: not found
  if (!task) {
    return res.status(404).json({
      error: 'Task not found',
    });
  }

  // 200: success
  return res.json(task);
}
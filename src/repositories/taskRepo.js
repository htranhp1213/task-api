import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

export async function findById(id) {
  // example with Prisma or in-memory
  return prisma.task.findUnique({ where: { id } });
  // or for in-memory array:
  // return tasks.find(t => t.id === id);
}
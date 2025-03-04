
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createTodo(title: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      isDone: false,
    },
  });

  return todo;
}

export default createTodo;
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAllByUser(userId: number): Promise<Todo[]> {
    return this.todoRepository.find({ where: { userId } });
  }

  create(userId: number, todo: Todo): Promise<Todo> {
    const newTodo = this.todoRepository.create({ ...todo, userId });
    return this.todoRepository.save(newTodo);
  }

  async update(userId: number, id: number, todo: Todo): Promise<void> {
    await this.todoRepository.update({ id, userId }, todo);
  }

  async remove(userId: number, id: number): Promise<void> {
    await this.todoRepository.delete({ id, userId });
  }
}


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

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<void> {
    await this.todoRepository.update(id, todo);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}

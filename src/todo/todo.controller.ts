import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() todo: Todo): Promise<void> {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.todoService.remove(id);
  }
}

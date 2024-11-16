import { Controller, Get, Post, Put, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req): Promise<Todo[]> {
    return this.todoService.findAllByUser(req.user.id);
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Request() req, @Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(req.user.id, todo);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  update(@Request() req, @Param('id') id: number, @Body() todo: Todo): Promise<void> {
    return this.todoService.update(req.user.id, id, todo);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Request() req, @Param('id') id: number): Promise<void> {
    return this.todoService.remove(req.user.id, id);
  }
}

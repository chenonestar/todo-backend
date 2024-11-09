import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])], // 引入 Todo 实体
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'todo_db',
      entities: [Todo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Todo]),
    TodoModule,
  ],
})
export class AppModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';
import { User } from './auth/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'todo_db',
      entities: [Todo, User], // 添加 User 实体
      synchronize: true,
    }),
    TodoModule, // 注册 Todo 模块
    AuthModule, // 注册 Auth 模块
  ],
})
export class AppModule {}



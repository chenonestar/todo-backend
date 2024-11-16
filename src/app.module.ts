import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), // 使用模块化的 TypeORM 配置
    AuthModule, // 注册 Auth 模块
    UsersModule, // 注册 Users 模块
    TodoModule, // 注册 Todo 模块
  ],
})
export class AppModule {}

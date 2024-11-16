import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from '../todo/todo.entity';
import { User } from '../auth/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123',
  database: 'todo_db',
  entities: [Todo, User], // 使用实体
  synchronize: true, // 开发阶段可用，生产环境建议关闭
};

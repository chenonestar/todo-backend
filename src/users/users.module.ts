import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module'; // 导入 AuthModule 以便使用 JwtService

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    AuthModule, // 导入 AuthModule
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}


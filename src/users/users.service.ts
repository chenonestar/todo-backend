// src/users/users.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async updateUser(id: number, updateData: UpdateUserDto): Promise<User> {
    // 检查更新数据是否为空
    if (Object.keys(updateData).length === 0) {
      throw new BadRequestException('更新数据不能为空');
    }

    // 执行部分更新
    await this.usersRepository.update(id, updateData);
    return this.usersRepository.findOneBy({ id });
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

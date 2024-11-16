// src/users/users.controller.ts
import { Controller, Get, Put, Delete, Param, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard'; // 假设你有一个 AuthGuard 用于保护路由
import { UpdateUserDto } from './dto/update-user.dto'; // 数据传输对象（DTO）

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@Request() req) {
    return this.usersService.findById(req.user.id);
  }

  @Put('profile')
  @UseGuards(AuthGuard)
  async updateProfile(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.updateUser(req.user.id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteUser(@Param('id') id: number) {
    await this.usersService.deleteUser(id);
  }
}


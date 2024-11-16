// src/auth/dto/register-user.dto.ts
import { IsString, IsEmail, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(6, { message: '密码长度必须至少为6个字符' })
  readonly password: string;
}

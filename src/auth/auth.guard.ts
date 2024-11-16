// src/auth/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }

    try {
      const decoded = this.jwtService.verify(token);
      if (!decoded || !decoded.sub) {
        throw new UnauthorizedException('Invalid token');
      }

      // 将用户信息存入请求对象中，并确保有 id 属性
      request.user = {
        id: decoded.sub,
        username: decoded.username,
      };
      return true;
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

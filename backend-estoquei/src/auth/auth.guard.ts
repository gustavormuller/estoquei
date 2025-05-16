import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from './public.decorator';
import { jwtConstants } from './auth.constant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService:JwtService, private reflector: Reflector) {}  
  async canActivate(
    context: ExecutionContext
  ){

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler()
    ]);
    if (isPublic) {
      return true;
    }
    console.log("entrou no guard");

    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    if (!token) {
      throw new UnauthorizedException();
    }
    try{
      const payload = token.split(' ')[1];
      if (!payload) {
        throw new UnauthorizedException();
      }

      const verify = await this.jwtService.verifyAsync(payload, {
        secret:jwtConstants.secret,
      });
      request['user'] = verify
      console.log(verify);
    }catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import {} from '@nestjs/common/decorators';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: any) {
    console.log(dto);
    return this.authService.signup();
  }

  @Post('signin')
  signIn() {
    return this.authService.signin();
  }
}

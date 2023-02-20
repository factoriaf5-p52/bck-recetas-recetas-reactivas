import { Body, Req, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';

@Controller()
@ApiTags('Login')
export class LoginController {
    constructor(private authService: AuthService){}
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Req() req: Request) {
        return this.authService.login(req.user);
    }
}

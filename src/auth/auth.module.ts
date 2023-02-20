import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ToolsModule } from 'src/tools/tools.module';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/constant';
import { LoginController } from './login.controller';
import { JwtStrategy} from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports:[
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: "24h"},
        }),
        UsersModule,
        ToolsModule,
    ],
    controllers: [LoginController],
    providers: [JwtStrategy, LocalStrategy, AuthService],
    exports: [AuthService],
})
export class AuthModule {}
